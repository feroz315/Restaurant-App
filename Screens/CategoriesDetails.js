import React from 'react'
import { TouchableOpacity,ScrollView,Image,Text,View,StyleSheet} from 'react-native';
import { s as tw } from "react-native-wind";
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { useNavigation } from '@react-navigation/native';
import CategoriesCard from './CategoriesCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CategoiesList from '../Categories/CategoiesList';
import { COLORS,SIZES, FONTS } from '../Const/theme';
import { RestaurantCategories } from '../Const/ApiData';



const CategoriesDetails = ({ route }) => {
const navigation = useNavigation()
let item = route.params;

return (
 <ScrollView>
  <View style={tw`flex-row items-center mt-12`}>
    <TouchableOpacity 
        onPress={()=>navigation.navigate("Home")} 
        style={tw`left-4 bg-gray-50 p-2 rounded-full shadow`}>
        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
    </TouchableOpacity>
    <Text style={tw`font-bold text-2xl ml-14`}>Categories Details</Text>
 </View>
           
{/* Categories Data  */ }     
<View style={style.view_container}>
{[RestaurantCategories].map((item,index)=>{
 return(
<CategoiesList
key={index}
foodcategories={item.FoodCategories}/>
 )
})}
</View>

<View style={tw`pb-36 bg-white mt-8`}>
 {
   item.restaurants.map((item,index) => <CategoriesCard item={{...item}} key={index}/>)               
 } 
</View>

</ScrollView>
    
  )
}



const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  
container: {
  margin: 8,
  width: (SIZES.width * 0.5 - 24),
  height: 170,
  justifyContent: 'space-between',
  alignItems: 'center',
  
},

image: {
  width: '100%',
  height: 130,
  borderRadius: SIZES.radius,
 
},

name_price_container: {
  padding: SIZES.padding,
  position: 'absolute',
  bottom: 0,
  height: 45,
  width: '100%',
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
},

name: {
  ...FONTS.h2,
  color: COLORS.black,
  textAlign: 'center'
},

price: {
  ...FONTS.h4,
  color: COLORS.primary
},
heading: {
  ...FONTS.h2,
  paddingLeft: 23,
  paddingBottom: 10
},

containerlist: {
  padding: SIZES.padding ,
  paddingBottom: SIZES.padding * 3,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: SIZES.padding,
  borderRadius: 40,
   
},

image_container: {
  width: 62,
  height: 50,
  borderRadius: 35,
  alignItems: 'center',
  justifyContent: 'center',

},

text: {
  textAlign: 'center',
  marginTop: SIZES.padding,
  ...FONTS.body3
},

view_container: {
  padding: SIZES.padding * 1,
  paddingBottom: 10,
},

shadow: {
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3,

},
headinglist: {
  ...FONTS.h2,
  paddingLeft: 5,
  marginTop:3

},
search_bar_image: {
  flexDirection: 'row',
  width: '80%',
  height: '100%',
  marginLeft:13,
  backgroundColor: COLORS.lightGray3,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: SIZES.radius,
},

search_bar_text: {
  ...FONTS.h4,
  flex: 1,
  marginEnd: 16
},


});


export default CategoriesDetails;