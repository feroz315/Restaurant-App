import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity ,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView,{Marker} from 'react-native-maps';
import { s as tw } from "react-native-wind";
import { themeColors } from '../Styles/theme';
import * as Icon from "react-native-feather";
import { emptyCart } from '../ReduxFolder/CartSlics';
import { useDispatch } from 'react-redux';




const DeliveryScreen = () => {
const navigation = useNavigation();
const dispatch = useDispatch();

const handleCancel =() => {
  dispatch(emptyCart());
  navigation.navigate("Home")
}




return (
<View style={{flex:1}}>
  <MapView
  style={{flex:1}}
  initialRegion={{
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
  mapType='standard'
>
<Marker
coordinate={{
  latitude: 24.8607,
  longitude: 67.0011
}} 
pinColor={themeColors.bgColor(1)}
/>
</MapView>

<View style={tw`rounded-t-3xl -mt-10 bg-white relative`}>
<TouchableOpacity style={tw`absolute right-4 top-2`}>
  
</TouchableOpacity>
<View style={tw`flex-row justify-between px-5 pt-4`}>
    <View>
        <Text style={tw`text-lg text-gray-700 font-semibold`}>Estimated Arrival</Text>
        <Text style={tw`text-3xl font-extrabold text-gray-700`}>35-45 Minutes</Text>
        <Text style={tw`mt-2 text-gray-700 font-semibold`}>Your Order is own its way</Text>
    </View>
    <Image style={tw`h-24 w-24`} source={require('../assets/icons/bikeGuy2.gif')} />
</View>

<View 
style={tw`p-2 flex-row justify-between items-center rounded-full my-3 mx-2 bg-orange-200`}> 
<View style={tw`p-1 rounded-full bg-orange-200`}>
    <Image style={tw`w-16 h-16 rounded-full bg-ornage-200`} source={require('../assets/icons/bikeGuy.png')} />
  </View>
    
<View style={tw`flex-1 ml-3`}>
 <Text style={tw`text-lg font-bold text-white`}>kashif</Text>
  <Text style={tw`text-white font-semibold`}>Your Rider</Text>
</View>
<View style={tw`flex-row justify-between items-center mr-3`}>
<TouchableOpacity 
style={tw`bg-white p-2 rounded-full mr-1`}
onPress={() => navigation.replace("SignOut")}
>
  <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth="2" />
</TouchableOpacity>

<TouchableOpacity onPress={handleCancel} style={tw`bg-white p-2 rounded-full`}>
  <Icon.X stroke={'red'} strokeWidth="5" />
</TouchableOpacity>

 </View>
</View>
</View>
    </View>
  )
}



const styles = StyleSheet.create({
 
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});



export default DeliveryScreen;