import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
// import { mealData } from '../constants';
import Animated, { FadeInDown } from 'react-native-reanimated';
// import Loading from './loading';
// import { CachedImage } from '../helpers/image';
import { useNavigation } from '@react-navigation/native';
import Loading from './Loading';
import { s as tw } from "react-native-wind";
import { COLORS } from '../Const/theme';


const RecipesList = ({categories, meals}) =>  {
const navigation = useNavigation();

  return (
    <View style={tw`mx-2 space-y-3`}>
     <Text style={tw`font-semibold text-2xl ml-2`}>Recipes</Text>
      <View>
      {
          categories.length==0 || meals.length==0?(
              <Loading size="large" className="mt-20" />
          ): (
              <MasonryList
                  data={meals}
                  keyExtractor={(item) => item.idMeal}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item, i}) => <RecipeCard item={item} index={i} navigation={navigation} />}
                  // refreshing={isLoadingNext}
                  // onRefresh={() => refetch({first: ITEM_CNT})}
                  onEndReachedThreshold={0.1}
              />
          )
      }
       </View>
    </View>
   
  )
}


const RecipeCard = ({item,index,navigation}) => {
let isEven = index%2==0;

return (
   
  <Animated.View entering={FadeInDown.delay(index*100).duration(1000).springify().damping(12)}>
    <Pressable
    style={{flex:1,justifyContent:'center',marginBottom:10, width:'100%',paddingLeft:isEven?0:8, paddingRight: isEven?8:0,marginTop:10}}
    onPress={() => navigation.navigate("RecipesDetails", item)}>       

    <Image source={{uri: item.strMealThumb}}
     sharedTransitionTag={{uri: item.strMeal}} 
     style={{backgroundColor:COLORS.lightGray,width:'100%', height: index%3==0? hp(25): hp(35), borderRadius: 35}}
      /> 
      <Text style={{fontSize: hp(2.2),marginTop:5,textAlign:'center',fontWeight:'500'}}>
      {item.strMeal.length > 20 ? item.strMeal.slice(0,20) + '...' : item.strMeal}
      </Text>
      
    </Pressable>         
    </Animated.View>
 )
}


export default RecipesList