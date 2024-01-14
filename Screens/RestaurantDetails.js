import { View,Text,ScrollView,Image,TouchableOpacity,Button,StyleSheet,Modal,Pressable, Alert} from 'react-native';
import React, { useEffect,useState} from 'react';
import { useNavigation, } from '@react-navigation/native';
import DishRow from '../Const/DishesRow';
import BasketIcon from '../Const/BasketIcon';
import { useDispatch,  } from 'react-redux';
import { addresturant } from '../ReduxFolder/RestaurantSlice';
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { s as tw } from "react-native-wind";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '../Const/theme';
import { emptyCart } from '../ReduxFolder/CartSlics';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const ResturantDetails = ({route,id}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false)
    const [counter,setCounter] = useState(0)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
    const navigation = useNavigation();
    let dispatch = useDispatch();
    let item = route.params;
       
   
    useEffect(() =>{
      if(item && item.id!=id){
      dispatch(emptyCart());
     }   
     dispatch(addresturant({...item})) 
    },[])
    
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
     console.warn("A date has been picked:", date);
     hideDatePicker();
    };
   
  return (
    <>
        <BasketIcon />
        <ScrollView>
            <View style={tw`relative`}>
                <Image style={tw`w-full h-72`} source={item.image} />
                <TouchableOpacity 
                    onPress={()=>navigation.navigate("Home")} 
                    style={tw`absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow`}>
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                </TouchableOpacity>
            </View>

          <View 
                style={{marginTop:8,paddingTop:6,borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:COLORS.white}}> 
                 <View style={tw`px-5`}>
                    <Text style={tw`text-3xl font-bold`}>{item.name}</Text>
                    {/* copy this code from restaurant card */}
                    <View style={tw`flex-row space-x-2 my-1`}>
                        <View style={tw`flex-row items-center space-x-1`}>
                            <Image 
                                source={require('../assets/icons/star.png')} 
                                style={tw`h-4 w-4`} /> 
                            <Text style={tw`text-xs`}>
                                <Text style={tw`text-green-700`}>{item.stars}</Text>
                                <Text style={tw`text-gray-700`}> ({item.reviews} review)· <Text style={tw`font-semibold text-gray-700`}>{item.type}</Text>
                              </Text>
                            </Text>
                        </View>
                        <View style={tw`flex-row items-center space-x-1`}>
                            <Icon.MapPin color="gray" width={15} height={15} />
                            <Text style={tw`text-gray-800 text-xs`}> Nearby · {item.address}</Text>
                        </View>
                    </View>
                </View>
            </View>
       
       {/* Click on it */}
        <TouchableOpacity 
            onPress={() => setModalVisible(true)} 
            style={tw`flex-row justify-between bg-gray-100 mt-3`}>
            <View>
             <Text style={tw`px-4 text-3xl font-bold`}>Reserve</Text>
             <Text style={tw`px-4 text-lg font-bold`}>your table now !                   
             </Text>
             </View>
             <Image style={{height:70,width:'30%',borderRadius:9999,marginRight:20}} source={require('../assets/icons/bg2.png')}/>
        
                </TouchableOpacity>
                
         {/* Modal */}
        <View style={styles.centeredView}>
         <Modal
             animationType="fade"
             transparent={true}
             visible={modalVisible}
             onShow={() => setOpen(true)}
             onRequestClose={() => {
               Alert.alert('Modal has been closed.');
               setModalVisible(!modalVisible)}}>
           
             <View style={styles.centeredView}>
               <View style={styles.modalView}>
              <Text style={tw`text-2xl mb-3`}>Book Your Table</Text>
              <View>
              <Pressable
                 style={[styles.button, styles.buttonClose]}
                 onPress={showDatePicker}>
                 <Text style={styles.textStyle}>Select your Date</Text>
               </Pressable>
               
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            
          <View>
            <Text style={tw`text-4xl ml-3 mt-4`}>Guest</Text> 
             <View style={tw`flex-row justify-center items-center mt-2 my-4`}>
              <TouchableOpacity onPress={() => setCounter(counter - 1)}>
              <Icon.Minus strokeWidth={4} stroke={themeColors.bgColor(1)} style={tw`mr-4`}/>
              </TouchableOpacity>
              <Text style={tw`text-2xl`}>{counter}</Text>
              <TouchableOpacity onPress={() => setCounter(counter + 1)}>
              <Icon.Plus strokeWidth={4} stroke={themeColors.bgColor(1)} style={tw`ml-4`} />
              </TouchableOpacity>
              </View>          
             </View>

               <Pressable
                 style={[styles.button, styles.buttonClose]}
                 onPress={() => setModalVisible(!modalVisible)}>
                 <Text style={styles.textStyle}>Confirm</Text>
               </Pressable>
                </View>
             </View>
           </Modal> 
        </View>
           
         <View style={tw`pb-36 bg-white`}>
                <Text style={tw`px-4 py-4 text-2xl font-bold`}>Menu</Text>
                {/* dishes */}
                {
                    item.dishes.map((dish,index) => <DishRow item={{...dish}} key={index}/>)                  
                }
            </View>
      
        </ScrollView>
    </>
    
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
      },
      messageView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
      },
      modalViewmessage:{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        height:"40%",
        width:"60%",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        height:"40%",
        width:"90%",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      SubmitView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:"60%"
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,

      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        
      },
});


export default ResturantDetails;











































































// <TouchableOpacity
// onPress={() => setActive(index)}
// style={{
//     borderRadius: 15,alignItems:'center',padding:3}}>
//    <View style={tw`rounded-2xl`}>
//     <Image
//         source={item.image}
//         style={{ width: hp(9), height: hp(7), borderRadius: 40,
//             backgroundColor: index === active ? COLORS.primary : null, 

//         }}
//     />
// </View>
// <Text style={{ fontSize: hp(2.2), fontWeight: '700', marginTop: 5 }}>
//     {item.person}
// </Text>
// </TouchableOpacity>


        // {
        //     item.Tables?.map((item,index) => {
        //         return(

        //         <View style={tw`flex-row items-center bg-orange-200 p-3 rounded-3xl shadow-2xl mb-3 mx-2`}>
        //          <TouchableOpacity
        //             onPress={() => navigation.replace('DishRow',item)}
        //             style={tw`flex-row justify-around`}>
                                            
        //             <Image style={{height: 80, width: 80,borderRadius:9999}} source={item.image}/>
                        
        //                 <View style={tw`pl-3`}>
        //                     <Text style={tw`text-base text-black`}>{item.person}</Text>
        //                     <Text style={tw`text-black text-base`}>{item.capacity}</Text>
        //                     <Text style={tw`text-black text-lg`}>{item.isAvailable}</Text>
                    
        //                 </View>
        //             </TouchableOpacity>
                       
        //                 <TouchableOpacity onPress={() => setOpen(true)}>
        //                   <Image source={require('../assets/icons/time.png')} 
        //                    style={{height: hp(3), width: hp(3),marginLeft:80,marginTop:40}} />
        //                     </TouchableOpacity>

        //                 </View>                 

        //         )
        //     })                  
        // }

