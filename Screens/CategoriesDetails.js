import React from 'react'
import { TouchableOpacity,ScrollView,Image,Text,View} from 'react-native';
import { s as tw } from "react-native-wind";
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { useNavigation } from '@react-navigation/native';
import CategoriesCard from './CategoriesCard';



const CategoriesDetails = ({ route }) => {
const navigation = useNavigation()
let item = route.params;

return (
 <ScrollView>
  <View style={tw`flex-row items-center mt-12`}>
    <TouchableOpacity 
        onPress={()=>navigation.navigate("Home")} 
        style={tw`left-4 bg-gray-50 p-2 rounded-full shadow`}>
        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
    </TouchableOpacity>
    <Text style={tw`font-bold text-2xl ml-14`}>Categories Details</Text>
 </View>

 <View style={tw`pb-36 bg-white mt-8`}>
 {
   item.restaurants.map((item,index) => <CategoriesCard item={{...item}} key={index}/>)               
 } 
</View>

</ScrollView>
    
  )
}



export default CategoriesDetails;