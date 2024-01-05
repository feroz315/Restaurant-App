
import React from 'react';
// import COLORS from '../Const/Colors';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { COLORS, SIZES, FONTS } from '../Const/theme';


const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...styles.title, color: COLORS.green}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};


const CustomButton = ({ text, onPressButton }) => {

  return (

      <View style={styles.button_container}>
          <TouchableOpacity style={styles.button} onPress={onPressButton} >
              <Text style={styles.button_text}>{text}</Text>
          </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  button_container: {
      marginTop: SIZES.padding * 3,
      alignItems: 'center',
      justifyContent: 'center'
  },

  button: {
      backgroundColor: COLORS.primary,
      width: '100%',
      height:55,
      padding: SIZES.padding,
      alignItems: 'center',
      borderRadius: SIZES.radius
  },

  button_text: {
      ...FONTS.h2,
      color: COLORS.white
  },

  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.green,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

})


export {PrimaryButton, SecondaryButton, CustomButton};

