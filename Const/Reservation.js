import { View, Text, TouchableOpacity, Image, SafeAreaView,ScrollView} from 'react-native'
import React,{ useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addMyCart,removetoCart,selectcartItems, selectcartItemsbyId} from '../ReduxFolder/CartSlics';
// import * as Icon from "react-native-feather";
import { s as tw } from "react-native-wind";
// import { COLORS } from '../Const/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS,SIZES,FONTS} from '../Const/theme';



 const Reservations = ({item}) => {
      
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
  
 return (
   <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={tw`space-x-4`}
    contentContainerStyle={{
    paddingHorizontal:15,
      }}>
    
      <TouchableOpacity
                onPress={() => handleClick()}
                style={{ backgroundColor: active ? COLORS.primary: null, 
                flexDirection:'row', alignItems:'center', borderRadius:15}}>
                <View style={tw`rounded-2xl`+ active}>
                <Image 
                  source={item.image}
                  style={{width: hp(9), height: hp(7),borderRadius:40}}
                  />
                </View>
                <Text style={{fontSize:hp(2.2),fontWeight:'700',marginTop:5}}>
                {item.person}
                </Text>                  
                </TouchableOpacity>
   
          </ScrollView>
    
    
  )
}

export default Reservations;

