import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addMyCart,removetoCart,selectcartItems, selectcartItemsbyId} from '../ReduxFolder/CartSlics';
// import * as Icon from "react-native-feather";
import { s as tw } from "react-native-wind";
// import { COLORS } from '../Const/theme';



 const Reservations = ({item}) => {
 
  return (
    <SafeAreaView>     
     <TouchableOpacity 
               style={tw`flex-row items-center bg-orange-200 p-3 rounded-3xl shadow-2xl mb-3 mx-2`}>
                <Image style={{height: 100, width: 100,borderRadius:9999}} source={item.image}/>
                    
                <View style={tw`flex flex-1 space-y-3`}>
                    <View style={tw`pl-3`}>
                        <Text style={tw`text-xl`}>{item.person}</Text>
                        <Text style={tw`text-gray-700`}>{item.description}</Text>
                    </View>
                            
                                                
                </View>
                </TouchableOpacity>
    </SafeAreaView>
    
    
  )
}

export default Reservations;