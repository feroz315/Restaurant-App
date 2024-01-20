import { View, Text,TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removetoCart, selectcartItems, selectTotal,addMyCart } from '../ReduxFolder/CartSlics';
import { useNavigation } from '@react-navigation/native';
import { s as tw } from "react-native-wind";
import { customize } from "react-native-wind";

import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';



export default function BasketScreen() {

    
    const [groupedItems, setGroupedItems] = useState([]);
    
    const basketItems = useSelector(selectcartItems);
    const basketTotal = useSelector(selectTotal);

    const dispatch = useDispatch();
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

    useMemo(() => {
        
    const gItems = basketItems.reduce((group, item)=>{
            if(group[item.id]){
              group[item.id].push(item);
            }else{
              group[item.id] = [item];
            }
            return group;
          },{})
        setGroupedItems(gItems);
        // console.log('items: ',gItems);
       
    }, [basketItems])

   
    return (
    <View style={tw`bg-white flex-1`}>
      {/* top button */}
      <View style={tw`relative py-4 shadow-sm mt-6 bg-primarycolor`}>
        <TouchableOpacity 
            onPress={navigation.goBack} 
            style={tw`absolute z-10 rounded-full p-1 shadow top-5 left-5`}>
            <Icon.ArrowLeft strokeWidth={4} stroke="white" />
        </TouchableOpacity>
        <View>
            <Text style={tw`text-center font-bold text-3xl text-white`}>My Cart</Text>
        </View>
      </View>   

      {/* dishes */}
      <ScrollView 
      showsVerticalScrollIndicator={false}
       style={tw`bg-white pt-5`}
       contentContainerStyle={{
        paddingBottom: 50
       }}>
       
            {
                Object.entries(groupedItems).map(([key, items])=>{
                    return (
                        <View key={key} 
                        style={tw`flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md`}>                 
                            <Text style={tw`font-bold text-gray-600 text-lg`}>{items.length} x </Text>
                            <Image style={tw`h-14 w-14 rounded-full`} source={items[0]?.image}/>
                            <Text style={tw`flex-1 font-bold text-gray-600 text-lg`}> {items[0]?.name}</Text>
                            
                          <TouchableOpacity 
                                style={tw`p-1 rounded-full bg-primarycolor mr-2 `} 
                                onPress={()=> dispatch(removetoCart({id: items[0]?.id}))}>
                                <Icon.Minus strokeWidth={2} height={18} width={18} stroke="white" />
                            </TouchableOpacity>
                           <Text style={tw`font-semibold text-lg`}>{items[0]?.price}</Text>                            
                          <TouchableOpacity 
                          style={tw`p-1 rounded-full bg-primarycolor ml-2 `} 
                          onPress={()=> dispatch(addMyCart(items[0]))}>
                          <Icon.Plus strokeWidth={2} height={18} width={18} stroke="white" />
                      </TouchableOpacity>

                        </View>
                    )
                })
            }
        </ScrollView>
        
     {/* total */}
      <View style={tw`p-6 px-8 rounded-t-3xl space-y-4 bg-white mb-2`}>
            <View style={tw`flex-row justify-between mb-4`}>
                <Text style={tw`text-gray-700 text-2xl`}>Subtotal</Text>
                <Text style={tw`text-gray-700 text-2xl`}>Rs.{basketTotal}</Text>
            </View>
            <View>
                <TouchableOpacity 
                onPress={()=> navigation.replace('OrderScreen')} 
                style={tw`mt-2 p-3 rounded-full bg-primarycolor`}>
                 <Text style={tw`text-white text-center font-bold text-2xl`}>Order Summary</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
  )
}