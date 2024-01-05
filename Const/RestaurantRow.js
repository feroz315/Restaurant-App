import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ResturantCard from '../Const/RestaurantCard';
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { s as tw } from "react-native-wind";




export default function RestaurantRow({ title, description, resturants}) {

  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
          <Text style={tw`font-bold text-lg`}>{title}</Text>
          <Text style={tw`text-gray-500 text-xs`}>
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text,fontWeight:'600'}}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
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