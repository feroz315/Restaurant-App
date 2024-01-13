import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../Const/Colors';
import OnBoardScreen from './OnBoradScreen';
import Details from './Details';
import LoginSubmit from './Loginform';
import SignUp from './SignUp';
import RestaurantDetails from './RestaurantDetails';
import RecipesDetails from './RecipesDetails';
import HomeScreen from './Homepage';
import CartScreen from './Cardpage';
import OrderScreen from './OrderScreen';
import DeliveryScreen from './DeliveryScreen';
import BasketScreen from './CartScreen';
import CreditCardForm from './CreditCard';
import SignOut from './SignOut';
import DishRow from '../Const/DishesRow';



const Stack = createStackNavigator();

const StackNavigation = () => {


return (
    <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>     
         <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="BoardScreen">
         <Stack.Screen name="BoardScreen" component={OnBoardScreen}/>
         <Stack.Screen name="SignUp" component={SignUp}/>
         <Stack.Screen name="Login" component={LoginSubmit}/>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={Details} />       
         <Stack.Screen name="Cart" component={CartScreen} /> 
         <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />  
         <Stack.Screen name="RecipesDetails" component={RecipesDetails} />   
         <Stack.Screen name="Payment" component={CreditCardForm} />   
         <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />   
         <Stack.Screen name="OrderScreen" component={OrderScreen} />  
         <Stack.Screen name="BasketScreen" component={BasketScreen} />
         <Stack.Screen name="SignOut" component={SignOut} />
         <Stack.Screen name="DishRow" component={DishRow} />
         
   
         </Stack.Navigator>
    </NavigationContainer>
  );
};



export default StackNavigation;
