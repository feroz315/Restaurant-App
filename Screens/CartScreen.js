import { View, Text,TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removetoCart, selectcartItems, selectTotal } from '../ReduxFolder/CartSlics';
import { useNavigation } from '@react-navigation/native';
import { s as tw } from "react-native-wind";

import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';



export default function BasketScreen() {

    const resturant = useSelector(state => state.resturant.resturant); 

    const [groupedItems, setGroupedItems] = useState([])
    
    const basketItems = useSelector(selectcartItems);
    const basketTotal = useSelector(selectTotal);

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const deliveryFee = 200;
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
    <View style={tw`bg-white flex-1 mt-2`}>
      {/* top button */}
      <View style={tw`relative py-4 shadow-sm`}>
        <TouchableOpacity 
            onPress={navigation.goBack} 
            style={tw`absolute z-10 rounded-full p-1 shadow top-5 left-5 bg-gray-300`}>
            <Icon.ArrowLeft strokeWidth={4} stroke="white" />
        </TouchableOpacity>
        <View>
            <Text style={tw`text-center font-bold text-3xl`}>Your cart</Text>
            <Text style={tw`text-center text-gray-500`}>{resturant.title}</Text>
        </View>
        
      </View>

     {/* delivery time */}
      <View style={tw`flex-row px-4 items-center bg-pink-100`}>
            <Image source={require('../assets/icons/bikeGuy.png')} style={tw`w-20 h-20 rounded-full`} />
            <Text style={tw`flex-1 pl-4`}>Deliver in 35-45 minutes</Text>
            <TouchableOpacity>
                <Text style={{color: themeColors.text,fontWeight:'400'}}>Change</Text>
            </TouchableOpacity>
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
                            <Text style={tw`font-semibold text-lg`}>{items[0]?.price}</Text>
                            <TouchableOpacity 
                                style={tw`p-1 rounded-full bg-gray-300 ml-2 `} 
                                onPress={()=> dispatch(removetoCart({id: items[0]?.id}))}>
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
     {/* totals */}
      <View style={tw`p-6 px-8 rounded-t-3xl space-y-4 bg-pink-100`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-700 text-lg`}>Subtotal</Text>
                <Text style={tw`text-gray-700 text-lg`}>Rs.{basketTotal}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-700 text-lg`}>Delivery Fee</Text>
                <Text style={tw`text-gray-700 text-lg`}>Rs.{deliveryFee}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`font-extrabold text-lg`}>Order Total</Text>
                <Text style={tw`font-extrabold text-lg`}>Rs.{basketTotal+deliveryFee}</Text>
            </View>
            <View>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Payment')} 
                style={tw`mt-2 p-3 rounded-full bg-orange-300`}>
                 <Text style={tw`text-white text-center font-bold text-lg`}>Place Order</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
  )
}