import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { s as tw } from "react-native-wind";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text,TouchableOpacity, Image, ScrollView,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { selectcartItems, selectTotal } from '../ReduxFolder/CartSlics';
import { customize } from "react-native-wind";
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { COLORS,SIZES, FONTS } from '../Const/theme';



const OrderScreen = () => {

const resturant = useSelector(state => state.resturant.resturant); 
const table = useSelector(state => state.product.product)
console.log(table);

const [groupedItems, setGroupedItems] = useState([])
    
const basketItems = useSelector(selectcartItems);
const basketTotal = useSelector(selectTotal);

const navigation = useNavigation();
const deliveryFee = 200;


// useEffect(() => {
// PreparingOrder()
// },[])

// const PreparingOrder = () => {
//  setTimeout(() =>{
//     navigation.navigate("DeliveryScreen")
//  },5000)
    
// }
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
   
<View style={tw`flex-1 bg-white`}>
      
   {/* top button */}
<View style={tw`relative py-4 shadow-sm mt-8 bg-primarycolor`}>
   <TouchableOpacity 
       onPress={navigation.goBack} 
       style={tw`absolute z-10 rounded-full p-1 shadow top-5 left-5`}>
       <Icon.ArrowLeft strokeWidth={4} stroke="white" />
   </TouchableOpacity>
   <View>
       <Text style={tw`text-center font-bold text-3xl text-white`}>Order Screen</Text>
   </View>
   
     </View>


 <View style={tw`flex-1`}>
   <Text style={tw`text-center text-gray-600 text-3xl mt-4 mr-8 mb-2`}>{resturant.name}</Text>

   <View style={tw` items-start mb-2`}>

        <View style={tw`flex-row items-center ml-4`}>
        <Text style={tw`text-center text-gray-600 text-2xl mt-2 `}>Name:</Text>      
        <Text style={tw`text-center text-gray-600 text-2xl mt-2 `}> {table.Name}</Text>          
        </View>
        
        <View style={tw`flex-row items-center ml-4`}>
        <Text style={tw`text-center text-gray-600 text-2xl mt-2`}>Number of Guests:</Text>
        <Text style={tw`text-center text-gray-600 text-2xl mt-2`}> {table.counter}</Text>
        </View>
        
        <View style={tw`flex-row items-center ml-4`}>
        <Text style={tw`text-center text-gray-600 text-2xl mt-2`}>Date:</Text> 
        <Text style={tw`text-center text-gray-600 text-2xl mt-2`}> {table.selectdate}</Text> 
        </View>
        
        <View style={tw`flex-row items-center ml-4`}>
        <Text style={tw`text-center text-gray-600 text-2xl mt-3`}>Time:</Text>
        <Text style={tw`text-center text-gray-600 text-2xl mt-3`}> {table.time}</Text>
          </View>
       </View>


  {/* dishes */}
  <ScrollView 
   showsVerticalScrollIndicator={false}
   style={tw`bg-white pt-6`}
   contentContainerStyle={{
    paddingBottom: 50
   }}>
        {
          Object.entries(groupedItems).map(([key, items])=>{
                return (
                    <View key={key} 
                    style={tw`flex-row items-center space-x-3 px-3 bg-white rounded-3xl py-1`}>                 
                        <Text style={tw`font-bold text-gray-600 text-lg`}>{items.length} x </Text>
                        <Image style={tw`h-14 w-14 rounded-full`} source={items[0]?.image}/>
                        <Text style={tw`flex-1 font-bold text-gray-600 text-lg`}> {items[0]?.name}</Text>
                        <Text style={tw`font-semibold text-lg`}>{items[0]?.price}</Text>
                        </View>
                )
            })
        }
     </ScrollView>
    
   </View>

   {/* totals */}
    <View style={tw`p-6 px-8 rounded-t-3xl space-y-4 bg-white`}>
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
              style={tw`mt-2 p-3 rounded-full bg-primarycolor`}>
               <Text style={tw`text-white text-center font-bold text-2xl`}>Check Out</Text>
              </TouchableOpacity>
          </View>
      </View>
   
  </View>
 )
}


const styles = StyleSheet.create({

container: {
   margin: 8,
   elevation: 3,
   width: SIZES.width - 25,
   height: 370,
   borderRadius: SIZES.radius,
   backgroundColor: COLORS.white
 },
  
 });
 


 
export default OrderScreen;
