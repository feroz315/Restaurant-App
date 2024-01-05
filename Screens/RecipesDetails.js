import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,ScrollView,Image,TouchableOpacity,StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '../Const/theme';
import { s as tw } from "react-native-wind";
import { ChevronLeftIcon, ClockIcon, FireIcon } from 'react-native-heroicons/outline';
import {  Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/solid';
import Animated,{ FadeIn,FadeInDown } from 'react-native-reanimated';



const RecipesDetails = ({route})  => {
let item = route.params;
const navigation = useNavigation();

 return (
   <View style={tw`flex-1 bg-white relative`}>
     <StatusBar style={"light"} />
         
    {/* Images */ }
     <View style={tw`flex-row justify-center`}>
        <Image
            source={{uri: item.strMealThumb}}
            sharedTransitionTag={{uri: item.strMeal}}
            style={{width: wp(100), height: hp(55),borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}/>
      </View>

       {/* Icons */ }
       <Animated.View entering={FadeIn.delay(200).duration(1000)} style={tw`w-full absolute flex-row justify-between items-center pt-14`}>
           <TouchableOpacity onPress={() => navigation.goBack()}
                 style={tw`p-2 rounded-full ml-5 bg-white`}>
                 <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
             </TouchableOpacity>
      </Animated.View>

    <ScrollView
      showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom: 30}}>
   
      <View style={tw`px-4 flex justify-between space-y-4 pt-8`}>
      {/* name and area */}
      <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} style={tw`space-y-2`}>
          <Text style={{fontSize: hp(3.5),fontWeight:'bold',flex:1 }}>
              {item?.strMeal}
          </Text>
          <Text style={{fontSize: hp(2.2),fontWeight:'500',flex:1}}> 
              {item?.strArea}
          </Text>
      </Animated.View>
      
      {/* misc */}
      <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} style={tw`flex-row justify-around mt-3`}>
          <View style={tw`flex rounded-full bg-amber-300 p-2 `}>
              <View style={{height: hp(6.5), width: hp(6.5),backgroundColor:COLORS.white,borderRadius:9999,flex:1, alignItems:'center',justifyContent:'center'}}>           
               <ClockIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 space-y-1`}>
                  <Text style={{fontSize: hp(2),fontWeight:'700'}}>
                      35
                  </Text>
                  <Text style={{fontSize: hp(1.3),fontWeight:'700'}}>
                      Mins
                  </Text>
              </View>
          </View>
          <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View style={{height: hp(6.5), width: hp(6.5),backgroundColor:COLORS.white,borderRadius:9999,flex:1, alignItems:'center',justifyContent:'center'}}>
                  <UsersIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 space-y-1`}>
                  <Text style={{fontSize: hp(2),fontWeight:'700'}}>
                      03
                  </Text>
                  <Text style={{fontSize: hp(1.3),fontWeight:'700'}}>
                      Servings
                  </Text>
              </View>
          </View>
          <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View style={{height: hp(6.5), width: hp(6.5),backgroundColor:COLORS.white,borderRadius:9999,flex:1, alignItems:'center',justifyContent:'center'}}>
                  <FireIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 space-y-1`}>
                  <Text style={{fontSize: hp(2),fontWeight:'700'}}>
                      103
                  </Text>
                  <Text style={{fontSize: hp(1.3),fontWeights:'700'}}>
                      Cal
                  </Text>
              </View>
          </View>
          <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View 
                  style={{height: hp(6.5), width: hp(6.5),backgroundColor:COLORS.white,borderRadius:9999,flex:1, alignItems:'center',justifyContent:'center'}}>
                  
                  <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2 space-y-1`}>
                  <Text style={{fontSize: hp(2),fontWeight:'700'}}>
                  </Text>
                  <Text style={{fontSize: hp(1.3),fontWeight:'700'}}>
                      Easy
                  </Text>
              </View>
          </View>
      </Animated.View>
 
 </View>
 
</ScrollView>
</View>

 )
}



export default RecipesDetails;