import React from 'react';
import {SafeAreaView, StyleSheet,View, Text, Image,TouchableOpacity} from 'react-native';
import {  useDispatch, useSelector } from 'react-redux';
import { COLORS, SIZES, FONTS } from '../Const/theme';
import { CustomButton } from '../Const/Button';
import { addMyCart,removetoCart } from '../ReduxFolder/CartSlics';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Globalstyles } from '../Styles/GobalStyle';


const CartScreen = () => {
  const products = useSelector(state => state.product);

  console.log(products);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  

// const getTotal = () => {
//     let total = 0;
//     foodItem.map(item => {
//        total = total + item.qty * item.price;
//     });
//     return total;
//  };

return(
<SafeAreaView style={Globalstyles.container_1}>
<View style={style.header}>
  <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
</View>

{products.map((item,i) => (
  
  <TouchableOpacity style={style.container}
   onPress={() => navigation.navigate("RecipesDetails", item)}>
      
    <Image source={{uri: item.strMealThumb}} style={style.image} />
    <View style={style.name_price_container}>
      <Text style={style.name}>{item.strMeal}</Text>
      <Text style={style.price}>Rs.{item.strArea}</Text>
    </View>

    <View style={style.qty_container}>
    {/* decrease qty */}
    <TouchableOpacity style={style.decrease_qty}
        onPress={() => { removetoCart(item, '-') }}>
        <Text style={style.change_qty_text}>-</Text>
    </TouchableOpacity>

    {/* Quantity */}
    <View style={style.qty}>
        <Text style={{ ...FONTS.h4 }}>{item.qty}</Text>
    </View>

    {/* increase qty */}
    <TouchableOpacity style={style.increase_qty}
        onPress={() => { addMyCart(item, '+') }}>
        <Text style={style.change_qty_text}>+</Text>
     </TouchableOpacity>
   </View>

    </TouchableOpacity>

  )
 
)}

      
</SafeAreaView>
 )
}


const style = StyleSheet.create({
header: {
paddingVertical: 20,
flexDirection: 'row',
alignItems: 'center',
marginHorizontal: 20,
},
cartCard: {
height: 100,
elevation: 15,
borderRadius: 10,
backgroundColor: COLORS.white,
marginVertical: 10,
marginHorizontal: 20,
paddingHorizontal: 10,
flexDirection: 'row',
alignItems: 'center',
},
actionBtn: {
width: 80,
height: 30,
backgroundColor: COLORS.primary,
borderRadius: 30,
paddingHorizontal: 5,
flexDirection: 'row',
justifyContent: 'center',
alignContent: 'center',
},
container: {
  margin: 8,
  elevation: 3,
  width: SIZES.width - 35,
  height: 110,
  borderRadius: SIZES.radius,
  backgroundColor: COLORS.white
},

image: {
  position: 'absolute',
  marginLeft: 3,
  width: '35%',
  height: '95%',
  borderRadius: SIZES.radius,
},
name: {
  ...FONTS.h3,
  color: COLORS.black,
  width: (SIZES.width - (SIZES.padding * 20))
},
name_price_container: {
  padding: SIZES.padding,
  position: 'absolute',
  right: 0,
  height: '100%',
  width: '65%',
},
price: {
  ...FONTS.h2,
  color: COLORS.primary
},
delete: {
  width: 30,
  height: 30,
  position: 'absolute',
  top: SIZES.padding,
  right: SIZES.padding,
  justifyContent: 'center',
  alignItems: 'center',
},

qty_container: {
  position: 'absolute',
  bottom: 6,
  left: 80,
  height: 40,
  justifyContent: 'center',
  flexDirection: 'row'
},

qty: {
  width: 30,
  backgroundColor: COLORS.lightGray,
  alignItems: 'center',
  justifyContent: 'center'
},

decrease_qty: {
  width: 30,
  backgroundColor: COLORS.lightGray,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20
},

increase_qty: {
  width: 30,
  backgroundColor: COLORS.lightGray,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20
},

change_qty_text: {
  ...FONTS.body2,
  color: COLORS.black
},

});



export default CartScreen;
















// <View style={{marginRight: 20, alignItems: 'center'}}>
// {item.qty == 0 ? null : (
//   <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.qty}</Text>)}
                   
//  <View style={style.actionBtn}>
// {item.qty == 0 ? null : (
//    <Icon name="remove" 
//                onPress={() => {
//                    if (item.qty > 1) {
//                        dispatch(removetoCart(item));
//                    } else {
//                        dispatch(DeleteMyCart(item.id));
//                    }
//                   }} size={25} color={COLORS.white} />)}
// {item.qty == 0 ? null : (         
//    <Icon name="add" size={25} color={COLORS.white} onPress={() => {dispatch(addMyCart(item))}}></Icon>)} 
//  </View>
// </View>