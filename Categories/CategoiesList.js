import React, { useState }from 'react';
import { TouchableOpacity,ScrollView,Image,Text,View,StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{FadeInDown} from 'react-native-reanimated';
import { COLORS,SIZES,FONTS} from '../Const/theme';
import { s as tw } from "react-native-wind";
import { useNavigation } from '@react-navigation/native';


const CategoiesList = ({foodcategories,activeCategory}) => {
const navigation = useNavigation()
const [bgColor, setBgColor] = useState('')

// function randomHex() {
//   console.log("Func Called");
//   let letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

return (
    <Animated.View entering={FadeInDown.duration(1000).springify()}>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={tw`space-x-4`}>
      {
        foodcategories.map((item,index) => {
          // let isActive = item.strCategory==activeCategory;
          // let active = bgColor ? COLORS.primary: null; 
            return(
            <TouchableOpacity
                key={index}
                onPress={() => navigation.replace("CategoriesDetails", {...item})}
                style={tw`flex items-center p-2`}
                >
                <View style={tw`rounded-full p-[6px]`}>
                <Image 
                  source={item.image}
                  onPress={() => setBgColor(index)}
                  style={{width: hp(9), height: hp(7),borderRadius:40,backgroundColor: bgColor ? null : COLORS.primary}}
                  />
                </View>
                <Text style={{fontSize:hp(2.2),fontWeight:'700',marginTop:5}}>
                {item.name}
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
    