import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ResturantCard from '../Const/RestaurantCard';
import * as Icon from "react-native-feather";
import { s as tw } from "react-native-wind";
import { COLORS } from './theme';
import { useNavigation } from '@react-navigation/native';




const RestaurantRecipeRow = ({id,title,description,restaurants}) => {
    
  // const [resturants, setResturants] = useState([]);

  useEffect(() => {
    // getFeaturedResturantById(id).then(data=>{
    //   // console.log('got data: ',data);
    //   setResturants(data?.resturants);
    // })
  }, [id])
  // console.log(resturants);
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
    <Text style={{color:"white", fontWeight:'600'}}>See All</Text>
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
    restaurants.map(restaurant => {
        return (
            <ResturantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              type={restaurant.type?.name}
              address="123 main street"
              description={restaurant.description}
              dishes={restaurant.dishes}
              lng={restaurant.lng}
              lat={restaurant.lat}/>
        )
    })
 }
  
    
    </ScrollView>
    </View>
  )
}

export default RestaurantRecipeRow;