import React, { useEffect } from 'react';
import {Text,View,StatusBar,Image} from 'react-native';
import { COLORS } from '../Const/theme';
import { useNavigation } from '@react-navigation/native';
import { s as tw } from "react-native-wind";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';



const OnBoardScreen = () => {
const navigation = useNavigation();
const ring2padding = useSharedValue(0);

useEffect(() => {
  ring2padding.value = 0;
  setTimeout(()=> ring2padding.value = withSpring(ring2padding.value+hp(5.5)), 300);
  setTimeout(()=> navigation.navigate('Home'), 2500)
},[])


return (
  
  <View style={tw`flex-1 justify-center items-center space-y-10 bg-amber-500`}>
   <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>

      {/* logo image with rings */}
      <Animated.View style={{padding: ring2padding,backgroundColor:"rgba(0,0,0,0.3)",borderRadius:9999}}>
            <Image source={require('../assets/images/welcome.png')}
                style={{width: hp(20), height: hp(20)}} />
        </Animated.View>


       <View style={tw`flex items-center space-y-2 mb-4`}>
        <Text style={{fontSize: hp(8),fontWeight:'700',color:COLORS.white,fontFamily:"Poppins-Regular",}}>
            Foody
        </Text>
        <Text style={{fontSize: hp(2.2),fontWeight:'600',color:COLORS.white}}>
            Food is always right
        </Text>
      </View>
  </View>
 );
}; 


export default OnBoardScreen;


















