import { View,Text,ScrollView,Image,TouchableOpacity,TextInput,StyleSheet,Modal,Pressable, Alert} from 'react-native';
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
import { COLORS,FONTS } from '../Const/theme';
import { emptyCart } from '../ReduxFolder/CartSlics';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment/moment';
import { addProducts } from '../ReduxFolder/HomeSlics';
 



const ResturantDetails = ({route,id}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false)
    const [counter,setCounter] = useState(0)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [Name, setName] = useState('');
    const [time, setTime] = useState(moment().format('hh: mm A'));
    const [selectdate, setSelectDate] = useState(moment(new Date()).format('DD-MM-YYYY'));


    const navigation = useNavigation();
    let dispatch = useDispatch();
    let item = route.params;
       
    useEffect(() =>{
      if(item && item.id!=id){
      dispatch(emptyCart());
     }   
     dispatch(addresturant({...item})) 
     console.log({...item})

    },[])

    const addTable = () => {
      dispatch(addProducts({
        Name,selectdate,time,counter
      },
      console.log("data",Name,selectdate,time,counter
      )
      ))
    }

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setSelectDate(moment(date).format('DD-MM-YYYY'))
    //  console.warn("A date has been picked:", date);
     hideDatePicker();
    };
    

    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleConfirmTime = (date) => {
      setTime(moment(date).format('hh: mm A'))
    //  console.warn("A date has been picked:", date);
     hideTimePicker();
    };
   
   
  return (
    <View>
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
             <Text style={tw`px-4 text-lg font-bold`}>your have {counter} Guest Now!                   
             </Text>
             </View>
             <Image style={{height:70,width:'30%',borderRadius:9999,marginRight:20}} source={require('../assets/icons/bg2.png')}/>
        
            </TouchableOpacity>
            
            {/* Modal */}
            <View style={styles.centeredView}>
            <ScrollView>
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
              <View style={tw`flex-row justify-between items-center`}>
               <Text style={tw`text-3xl text-gray-700 mb-3 mt-2 ml-16`}>Book Your Table</Text>
               <TouchableOpacity                  
                onPress={() => setModalVisible(!modalVisible)}>                           
                <Image source={require('../assets/icons/material.png')} style={tw`w-7 h-7 ml-16`}/>
                </TouchableOpacity>
               </View>

          <ScrollView>
        <Text style={tw`text-base mt-2 ml-2`}>Name </Text>
          {/* name field*/}
          <TextInput
          value={Name}
          autoCapitalize='none'
          style={styles.input}
          placeholder='Enter your Name'
          onChangeText={(text) => setName(text)} />

        <View style={tw`flex-row justify-center items-center mt-5 ml-3`}>               
        
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={showDatePicker}> 
          <Text style={tw`text-white`}>Select date</Text>
           <Text style={styles.textStyle}>{selectdate}</Text>
          
           </TouchableOpacity>

             <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}/>  

          <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={showTimePicker}>
          <Text style={tw`text-white`}>Pick your Time</Text>
          <Text style={styles.textStyle}>{time}</Text>
        
            </TouchableOpacity>

               <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}/>
          </View>

         <View style={tw`ml-12 mt-1`}>
            <Text style={tw`text-4xl mt-8 ml-16`}>Guest</Text> 
             <View style={tw`flex-row items-center ml-16 mt-2 my-4`}>
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
             style={[styles.button1, styles.buttonClose]}
             onPress={() => addTable()}>
             <Text style={styles.textStyle}>Reserve</Text>
             </Pressable>
                 <Text style={tw`text-lg text-gray-800 mt-5 ml-2`}>Note: 
                 Please confirm your Reservation before one hour of your time. 
                 Otherwise we will consider as cancel your reservation if you will inform us then we will refund your 100% of payment.</Text>
              
              <View style={tw`flex-row items-center mt-3`}>                              
               <Pressable
                 style={[styles.button1, styles.buttonClose]}
                 onPress={() => setModalVisible(!modalVisible)}>
                 <Text style={styles.textStyle}>Yes I agree</Text>
               </Pressable>
               </View>
               </ScrollView>
                 </View>
             </View>
             </Modal> 
             </ScrollView>
        </View>
           

         <View style={tw`pb-36 bg-white`}>
                <Text style={tw`px-4 py-4 text-2xl font-bold`}>Menu</Text>
                {/* dishes */}
                {
                    item.dishes.map((dish,index) => <DishRow 
                    item={{...dish}} 
                    key={index} 
                    />)                  
                }
            </View>
      
        </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      messageView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
      },
      modalViewmessage:{
        margin: 10,
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
        alignItems:'flex-start',
        shadowColor: '#000',
        height:"93%",
        width:"100%",
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
        height:45,
        borderWidth:0.5,
        justifyContent:'center',
        alignItems:'center',
        elevation: 2,
        width:"42%",
        marginLeft:8
      },
      button1: {
        borderRadius: 20,
        height:45,
        borderWidth:0.5,
        justifyContent:'center',
        alignItems:'center',
        elevation: 2,
        width:"42%",
        marginLeft:82,
        marginTop:10
      },
     
      buttonOpen: {
        backgroundColor: '#bd2c3d',
      },
      buttonClose: {
        backgroundColor: '#bd2c3d',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,

      },
      input: {
        borderRadius: 15,
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        borderWidth: 1,
        width:'100%',
        ...FONTS.body3,
        padding: 10,
        marginVertical: 8,
      },
      inputdate: {
        borderRadius: 15,
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        borderWidth: 1,
        width:'45%',
        ...FONTS.body3,
        padding: 10,
        marginVertical: 8,
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

