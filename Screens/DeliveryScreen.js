import React from 'react';
import { View,Text,Dimensions,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// import MapView,{ PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { s as tw } from "react-native-wind";
import { COLORS } from '../Const/theme';

var { width, height } = Dimensions.get('window');


const DeliveryScreen = () => {
const navigation = useNavigation();

  return (
    <View style={{flex:1}}>
  <MapView
  style={styles.map}
  provider={PROVIDER_GOOGLE}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>


    
    </View>
  )
}



const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height,
  },
});



export default DeliveryScreen;