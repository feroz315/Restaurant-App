import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ResturantCard from '../Const/RestaurantCard';
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { s as tw } from "react-native-wind";
import { useNavigation } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';




export default function RestaurantRow({ resturants }) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4 mb-2`}>
        <View>
          <Text style={tw`font-bold text-lg`}>RESTAURANTS</Text>
          <Text style={tw`text-gray-500 text-base`}>soft and tendori fried chicken</Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text,fontWeight:'600'}}>See All</Text>
        </TouchableOpacity>
      </View>

      <MasonryList
      data={resturants}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index}) => <ResturantCard item={item} key={index}/>}
      onEndReachedThreshold={0.1}
      />
      
    </View>
  )
}

