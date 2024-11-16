import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../Styles/theme';
import * as Icon from "react-native-feather";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { s as tw } from "react-native-wind";
import { COLORS } from '../Const/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';



const RestaurantCard = ({item,index}) => {

const navigation = useNavigation();
let isEven = index%2==0;

  return (
  <Animated.View entering={FadeInDown.delay(index*100).duration(1000).springify().damping(12)}>
    <TouchableWithoutFeedback 
      style={{paddingLeft:isEven?0:8, paddingRight: isEven?8:0}}
      onPress={() => {
      navigation.navigate("RestaurantDetails", {...item})
      }}>

    <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius:7,
     marginRight:6,backgroundColor:COLORS.white,borderRadius:50}}>
    
  <Image style={{width:'100%',height:115,borderRadius:20,marginLeft:5,marginTop:10}} source={item.image}/>
   <View style={tw`px-3 pb-4 space-y-2`}>
    <Text style={tw`text-lg pt-2`}>{item.name}</Text>
    <View style={tw`flex-row items-center space-x-1`}>
        <Image source={require('../assets/icons/star.png')} style={tw`h-4 w-4`} />
        <Text style={tw`text-sm`}>
            <Text style={tw`text-green-700`}> {item.stars}</Text>
            <Text style={tw`text-gray-700`}> ({item.reviews} review) · <Text style={tw`font-semibold text-gray-700`}>{item.type}</Text>
          </Text>
        </Text>
    </View>
    <View style={tw`flex-row items-center space-x-1`}>
        <Icon.MapPin color="gray" width={15} height={15} />
        <Text style={tw`text-gray-700 text-sm`}> {item.address}</Text>
    </View>  
    </View>

     </View>

     
    </TouchableWithoutFeedback>

    </Animated.View>

      )
}



export default RestaurantCard;