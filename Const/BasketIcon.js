import { View, Text, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { s as tw } from "react-native-wind";
import { selectcartItems,selectTotal} from '../ReduxFolder/CartSlics';
import { customize } from "react-native-wind";



export default function BasketIcon() {

    const cartItems = useSelector(selectcartItems);
    const carttotal = useSelector(selectTotal);
    const navigation = useNavigation();

    customize({
      theme: {
        colors: {
          primarycolor: "#bd2c3d",
          secondary: {
            light: "#f3f3f3", // Light shade
            dark: "#212121", // Dark shade
          },
        },
      },
    });

    // if(!cartItems.length) return null;
  return (
    <View style={tw`absolute bottom-12 w-full z-50`}>
    {cartItems == 0 ? null
        :
        <TouchableOpacity 
          onPress={()=> navigation.navigate('BasketScreen')} 
          style={tw`flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg bg-primarycolor`}>
            <View style={tw`p-2 px-4 rounded-full `}>
              <Text style={tw`font-extrabold text-white text-lg`}>{cartItems.length}</Text>
            </View>
            
            <Text style={tw`flex-1 text-center font-extrabold text-white text-lg`}>View Cart</Text>
            <Text style={tw`font-extrabold text-white text-lg`}>Rs.{carttotal}</Text>
        
        </TouchableOpacity>
      }
      
    </View>
  )
}