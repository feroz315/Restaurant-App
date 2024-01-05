 
import React from 'react';
import {SafeAreaView, TouchableOpacity,StyleSheet,View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { back,star } from "../Const/icons";
import { FONTS,SIZES,COLORS } from '../Const/theme';
import { Globalstyles } from '../Styles/GobalStyle';

// const { height } = Dimensions.get("window");

const RestaurantDetails = ({navigation, route}) => {
  const item = route.params;
  
  const SPACING = 10;

    // Header function
    function renderHeader() {
      return (
          <View style={{ flexDirection: 'row', height: 50,marginTop:25 }}>
              {/* Go back */}
              <TouchableOpacity style={styles.go_back}
                  onPress={() => navigation.goBack()}>
                  <Image
                      source={back}
                      resizeMode="contain"
                      style={{
                          width: 25,
                          height: 25,
                          tintColor: COLORS.black
                      }} />
          
              </TouchableOpacity>

          </View>
      )
  }

   //function for displaying food item information
   function renderFoodInfo() {
    return (
        <>
              <View style={{ alignItems: 'center' }}>
                  <View style={styles.food_image}>

                      {/* Food Image */}
                      <Image
                          source={item.icon}
                          resizeMode='contain'
                          style={{
                              width: SIZES.width - 24,
                              height: '85%',
                          }} />

                  </View>
              </View>

              <View style={styles.bottom_container}>

                  {/* Name */}
                  <Text style={styles.name}>{item?.name}</Text>
                     {/* Rating */}
                      <View style={{ flexDirection: 'row' }}>
                          <Image
                              source={star}
                              resizeMode="contain"
                              style={{
                                  width: 23,
                                  height: 23,
                              }} />
                          <Text style={styles.rating}>{item?.rating}</Text>
                      </View>

                  {/* Description */}
                    <Text style={styles.description}>{item?.description}</Text>

                 {/* Address */}
                    <Text style={styles.description}>Address: {item?.address}</Text>

                 {/* phone number */}
                    <Text style={styles.description}>Phone: {item?.phonenumber}</Text>

                 {/* Time */}
                 <Text style={styles.description}>{item?.time}</Text>
                

              </View>
     </>
      )
  }

  return (
      <SafeAreaView style={Globalstyles.container_1}>
          {renderHeader()}
          {renderFoodInfo()}
      </SafeAreaView>
  )
};


export default RestaurantDetails;


const styles = StyleSheet.create({

  food_image: {
      height: SIZES.height * 0.28,
      marginTop: 50,
      paddingBottom: 10,

  },

  bottom_container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 5,
      backgroundColor: COLORS.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      shadowOpacity: 0.1,
      shadowRadius: 3,
  },

  name: {
      ...FONTS.h1, textAlign: 'center',
      paddingVertical: SIZES.padding * 2,
      marginHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray3,
      borderBottomWidth: 1
  },

  description: {
      ...FONTS.body3, textAlign: 'center',
      paddingVertical: SIZES.padding * 2,
      marginHorizontal: SIZES.padding * 3,
      color: COLORS.black,
      borderBottomColor: COLORS.lightGray3,
      borderBottomWidth: 1
  },

  row_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: SIZES.padding * 3,
      paddingHorizontal: SIZES.padding * 3,

  },

  duration_text: {
      marginLeft: SIZES.padding,
      ...FONTS.body2,
      color: COLORS.black
  },

  price: {
      marginLeft: SIZES.padding,
      ...FONTS.h2,
      color: COLORS.black
  },

  rating: {
      marginLeft: SIZES.padding,
      ...FONTS.h4
  },

  go_back: {
      width: 50,
      paddingLeft: SIZES.padding * 2,
      justifyContent: 'center'
  },

  category: {
      height: '100%',
      width: '75%',
      backgroundColor: COLORS.lightGray3,
      paddingHorizontal: SIZES.padding * 3,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: SIZES.radius
  },

  cart: {
      width: 50,
      paddingRight: SIZES.padding * 2,
      justifyContent: 'center'
  }
});