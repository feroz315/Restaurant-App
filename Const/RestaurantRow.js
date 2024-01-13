import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ResturantCard from '../Const/RestaurantCard';
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { s as tw } from "react-native-wind";
import { useNavigation } from '@react-navigation/native';




export default function RestaurantRow({ resturants }) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
          <Text style={tw`font-bold text-2xl`}>Restaurants</Text>
          <Text style={tw`text-gray-500 text-base`}>Welcome All Foodies!</Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text,fontWeight:'600'}}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
        paddingHorizontal:15,
        }}
        style={tw`overflow-visible py-5`}>
       
        {
          resturants.map((restaurant, index) => <ResturantCard item={restaurant} key={index}/>)          
                   
        } 

       </ScrollView>
    
    </View>
  )
}