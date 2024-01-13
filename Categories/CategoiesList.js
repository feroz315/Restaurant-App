import React from 'react';
import { TouchableOpacity,ScrollView,Image,Text,View,StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{FadeInDown} from 'react-native-reanimated';
import { COLORS,SIZES,FONTS} from '../Const/theme';
import { s as tw } from "react-native-wind";


const CategoiesList = ({categories,handleChangeCategory,activeCategory}) =>  {
  
  return (
    <Animated.View entering={FadeInDown.duration(1000).springify()}>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={tw`space-x-4`}
    >
    {
        categories.map((cat,index) => {
          let isActive = cat.strCategory==activeCategory;
          let activeButtonClass = isActive ? COLORS.primary: COLORS.black; 
            return(
            <TouchableOpacity
                key={index}
                onPress={() => handleChangeCategory(cat.strCategory)}
                style={tw`flex items-center p-2`}
                >
                <View style={tw`rounded-full p-[6px]`+activeButtonClass}>
                <Image 
                  source={{uri: cat.strCategoryThumb}}
                  style={{width: hp(9), height: hp(7),borderRadius:40}}
                  />

                </View>
                <Text style={{fontSize:hp(2.2),fontWeight:'700',marginTop:5}}>
                {cat.strCategory}
                </Text>                  
                </TouchableOpacity>
          )
        })
    }         
      </ScrollView>
    </Animated.View>
  )
}


export default CategoiesList;


 const style = StyleSheet.create({ 
    containerlist: {
      padding: SIZES.padding ,
      paddingBottom: SIZES.padding * 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: SIZES.padding,
      borderRadius: 40,
       
    },
    
    image_container: {
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
    
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
    
    });
    