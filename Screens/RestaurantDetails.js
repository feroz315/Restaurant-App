import { View, Text,  ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect} from 'react';
import { useNavigation, } from '@react-navigation/native';
import DishRow from '../Const/DishesRow';
import BasketIcon from '../Const/BasketIcon';
import { useDispatch,  } from 'react-redux';
import { addresturant } from '../ReduxFolder/RestaurantSlice';
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { s as tw } from "react-native-wind";
import { COLORS } from '../Const/theme';
import Reservations from '../Const/Reservation';



const ResturantDetails = ({route}) => {

    const navigation = useNavigation();
    let dispatch = useDispatch();
    let item = route.params;
     
    useEffect(()=>{
        if(item && item.id){
        dispatch(addresturant({...item}))
        }
    },[])
  return (
    <>
        <BasketIcon />
        <ScrollView>
            <View style={tw`relative`}>
                <Image style={tw`w-full h-72`} source={item.image} />
                <TouchableOpacity 
                    onPress={()=>navigation.goBack()} 
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
                    <Text style={tw`text-gray-500 mt-2`}>{item.description}</Text>                 
                </View>
                
            </View>

        <View style={tw`pb-36 bg-white`}>
            <Text style={tw`px-4 py-4 text-2xl font-bold`}>Reservation</Text>
            {/* Table Reservation */}
            {
                item?.Tables.map((table,index) => <Reservations item={{...table}} key={index}/>)                    
            }
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

export default ResturantDetails;