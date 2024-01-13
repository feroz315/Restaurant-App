import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { s as tw } from "react-native-wind";
import { View, Image,Text } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const OrderScreen = () => {

const navigation = useNavigation();

useEffect(() => {
PreparingOrder()
},[])


const PreparingOrder = () => {
 setTimeout(() =>{
    navigation.navigate("DeliveryScreen")
 },5000)
    
}

return (
    
    <View style={tw`flex-1 bg-white justify-center items-center`}>
    <Image source={require('../assets/icons/1.gif')} style={tw`h-80 w-80`}/>
      <Text style={{ fontSize: hp(3.5) }}>Order Delivery on the Way</Text>
      </View>
 )
}



 
export default OrderScreen;