import React from 'react';
import { StyleSheet, Text, Pressable, View,TouchableOpacity,Image} from 'react-native';
import { signOut } from 'firebase/auth';
import { FirebaseAuth } from '../Config/firebase';
import { s as tw } from "react-native-wind";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { COLORS,SIZES, FONTS } from '../Const/theme';
import * as Icon from "react-native-feather";
import { themeColors } from '../Styles/theme';
import { CustomButton } from '../Const/Button';



const SignOut = () => {

const auth = FirebaseAuth;
const navigation = useNavigation();

  const userSignOut = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      navigation.navigate('Login')
    } catch (error) {
      console.log(error);
  
    }
    
  }
  

  return (

    <View style={styles.centeredView}>
  
     <Text style={{ fontSize: hp(4.2),color:COLORS.dark}}>Thank You using this App! </Text>
     <Text style={{ fontSize: hp(4.2),color:COLORS.dark}}>Please give Your Feedback! </Text>
     
     <CustomButton text='Logout Your Screen' onPressButton={() => userSignOut("Login")} />
     <CustomButton text='Back to Home' onPressButton={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
 
  button: {
    borderRadius: 20,
    marginTop:20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  
 });

export default SignOut;





















// <Pressable
// style={[styles.button, styles.buttonOpen]}
// onPress={() => userSignOut()}>
// <Text style={{ fontSize: hp(2.5)}}>LogOut</Text>
// </Pressable>
// <Pressable
// style={[styles.button, styles.buttonOpen]}
// onPress={() => navigation.navigate("Home")}>
// <Text style={{ fontSize: hp(2.5)}}>Home</Text>
// </Pressable>
