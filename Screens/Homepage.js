import React, { useEffect, useState } from 'react';
import { StatusBar,TouchableOpacity,ScrollView,Image,StyleSheet,Text,View,TextInput } from 'react-native';
import { COLORS,SIZES, FONTS } from '../Const/theme';
import CategoiesList from '../Categories/CategoiesList';
import RecipesList from '../Categories/RecipesList';
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BellIcon } from 'react-native-heroicons/outline'
import { s as tw } from "react-native-wind";
import { useNavigation } from '@react-navigation/native';
import Search from './Search';
import { restaurantrecipe } from '../Const/ApiData';
import RestaurantRow from '../Const/RestaurantRow';
import { FirebaseAuth } from '../Config/firebase';
import { signOut } from 'firebase/auth';




const HomeScreen = () => {
  
const [categories,setCatgories ] = useState([]);
const [activeCategory, setActiveCategory] = useState('Beef');
const [meals, setMeals] = useState([]);
const auth = FirebaseAuth;
const navigation = useNavigation();




useEffect(() => {
getCategories()
getRecipes()

},[])

const userSignOut = async () => {
  try {
    const res = await signOut(auth);
    console.log(res);
    navigation.navigate('Login')
  } catch (error) {
    console.log(error);

  }
  
}

const getCategories = async () => {
  try {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    console.log(res.data.categories)
    if(res && res.data){
    setCatgories(res.data.categories)
    } 
  }catch (error) {
    console.error(error);

 }
}

const getRecipes = async (category= "Beef") => {
  try {
    const resRecipes = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    console.log(resRecipes.data)
    if(resRecipes && resRecipes.data){
      setMeals(resRecipes.data.meals)
     }
  } catch (error) {
    console.log(error)
  }
}

const handleChangeCategory = category=>{
  getRecipes(category);
  setActiveCategory(category);
  setMeals([]);
  
}


return (
   <View style={tw`flex-1 bg-white`}>
   <StatusBar style="dark" />

    {/* main */}
   <ScrollView
   showsVerticalScrollIndicator={false}
   contentContainerStyle={{paddingBottom: 50}}
   style={tw`space-y-6 pt-14`}>
 
   <View style={tw`mx-4 flex-row justify-between items-center mb-2`}>
          <TouchableOpacity onPress={() => userSignOut()}>
            <Image source={require('../assets/images/avatar.png')} style={{height: hp(5), width: hp(5.5)}} />
            </TouchableOpacity>
              {/* search bar */}
              <Search />
          <BellIcon size={hp(4)} color="gray" />       
       </View>
              
{/* Categories Data  */ }     
    <View style={style.view_container}>
   <Text style={{fontSize:hp(3.2),fontWeight:'600',marginBottom:5}}>Categories</Text>
   {categories.length > 0 && 
  <CategoiesList 
  categories={categories} 
  activeCategory={activeCategory} 
  handleChangeCategory={handleChangeCategory} 
  /> }
  </View>
    
  {/* Restaurant card */}
    <View style={tw`mt-3`}>
       {
      [restaurantrecipe].map((item,index) => {
        return(
            <RestaurantRow 
            key={index}
            title={item.title}
            description={item.description}
            resturants={item.restaurants}
            />
        )
      })
  }
    
  </View>

{/* Recipes Data  */ }
 <View style={style.headinglist}>
<RecipesList meals={meals} categories={categories} />
 </View>

</ScrollView>
</View>

  )
};


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
  padding: SIZES.padding * 2,
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



export default HomeScreen;










