
import React from 'react';
import { Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import {View} from 'react-native';
import HomeScreen from './Homepage';
import CartScreen from './Cardpage';
import Search from './Search';
import LocalMall from '../Const/LocalMall';
import Favoutie from '../Const/LocalMall';
// import { useSelector } from 'react-redux';



const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
// const CartProducts = useSelector(state => state.cart);

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.green,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),headerShown: false
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={LocalMall}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({czolor}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.green,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.green} size={28} />
            </View>
          ),headerShown: false
        }}
      />
        <Tab.Screen
        name="Favour"
        component={Favoutie}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite-outline" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
          <View style={{ position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
            <View>
               <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>cart</Text>
            </View>
              <Icon name="shopping-cart" color={color} size={30} />
          </View>
          
          ),headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

