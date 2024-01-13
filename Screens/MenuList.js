import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMyCart,removetoCart,selectcartItemsbyId} from '../ReduxFolder/CartSlics';
import * as Icon from "react-native-feather";
import { s as tw } from "react-native-wind";
import { COLORS } from '../Const/theme';
import { restaurantrecipe } from './ApiData';



 const MenuList = () => {
 
 const  dispatch = useDispatch();
 const basketItems = useSelector(state => selectcartItemsbyId(state,item.id));
    
 const handleIncrease = ()=>{
        dispatch(addMyCart({...item}));
    }
const handleDecrease = ()=>{
        dispatch(removetoCart({id: item.id}))
    }
  return (
    <>
            <View style={tw`flex-row items-center bg-gray-100 p-3 rounded-3xl shadow-2xl mb-3 mx-2`}>
                <Image style={{height: 100, width: 100,borderRadius:9999}} source={item.image}/>
                    
                <View style={tw`flex flex-1 space-y-3`}>
                    <View style={tw`pl-3`}>
                        <Text style={tw`text-xl`}>{item.name}</Text>
                        <Text style={tw`text-gray-700`}>{item.description}</Text>
                    </View>
                    <View style={tw`flex-row pl-3 justify-between items-center`}>
                        <Text style={tw`text-gray-700 text-lg font-bold`}>
                            Rs.{item.price}
                        </Text>
                        <View style={tw`flex-row items-center`}>
                            <TouchableOpacity 
                                onPress={handleDecrease} 
                                // disabled={!basketItems.length} 
                               style={{backgroundColor: COLORS.orange,borderRadius:9999,padding:1}}>
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                            <Text style={tw`px-3 text-black text-lg`}>
                            {basketItems.length}
                            </Text>
                            
                            <TouchableOpacity 
                                onPress={handleIncrease} 
                                style={{backgroundColor: COLORS.orange,borderRadius:9999,padding:1}}>
                                <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>
    </>
    
    
  )
}

export default MenuList;