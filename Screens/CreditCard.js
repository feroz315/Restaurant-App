import React, { useEffect, useState } from 'react';
import { StyleSheet, View,TextInput,Text,Image,TouchableOpacity,ScrollView } from 'react-native';
import { CustomButton } from '../Const/Button';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Const/theme';
import { SIZES, FONTS } from '../Const/theme';
import { s as tw } from "react-native-wind";
import { themeColors } from '../Styles/theme';
import * as Icon from "react-native-feather";
import { customize } from "react-native-wind";


const CreditCardForm = () => {
  
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();


  useEffect(() => {
    setName("")
    setCardNumber("")
    setExpiration("")
    setCvv('')

  },[])
  
  customize({
    theme: {
      colors: {
        primarycolor: "#bd2c3d",
        secondary: {
          light: "#f3f3f3", // Light shade
          dark: "#212121", // Dark shade
        },
      },
    },
  });
  return (


<View style={{ flex:1, backgroundColor:COLORS.white}}>
<ScrollView>

<View style={tw`relative py-4 shadow-sm mt-8 bg-primarycolor `}>
        <TouchableOpacity 
            onPress={navigation.goBack} 
            style={tw`absolute z-10 rounded-full p-1 shadow top-5 left-5`}>
            <Icon.ArrowLeft strokeWidth={4} stroke="white" />
        </TouchableOpacity>
        <View>
            <Text style={tw`text-center font-bold text-3xl text-white`}>Payment Details</Text>
        </View>
      </View>   
 
   <View style={{flex:1,alignSelf:'center',width:"100%",marginLeft:15,marginVertical:15}}>
    <Text style={tw`text-3xl mb-4 text-center w-full rounded-full`}>Card Details</Text>
     <TextInput
        style={styles.input}
        placeholder="Cardholder Name"
        value={name}ff
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <View style={styles.row}>
        <TextInput
          style={[
            styles.input2,
            {
              marginRight: 24,
            },
          ]}
          placeholder="Expiration Date"
          value={expiration}
          onChangeText={(text) => setExpiration(text)}
        />
        <TextInput
          style={styles.input2}
          placeholder="Security Code"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
        />
        </View>
 
      <View style={{flexDirection:'row',marginLeft:200,marginTop:5}}>
        <Image 
         source={require("../assets/icons/visa.png")} 
         style={{width:40,height:30}}  
         />
         <Image 
         source={require("../assets/icons/1156750_finance_mastercard_payment_icon.png")} 
         style={{width:40,height:30,marginLeft:5}}  
         />
         <Image 
         source={require("../assets/icons/67221_paypal_icon.png")} 
         style={{width:40,height:30,marginLeft:5}}  
         />
       </View>
            {name == '' || cardNumber == '' || expiration == '' || cvv == '' ? 
            
           <TouchableOpacity 
            onPress={()=> navigation.replace('Home')} 
            style={tw`mt-4 p-3 rounded-full bg-primarycolor mr-2`}>
             <Text style={tw`text-white text-center font-bold text-2xl`}>Cancel Order</Text>
            </TouchableOpacity>
              :
            <TouchableOpacity 
            onPress={()=> navigation.navigate('SignOut')} 
            style={tw`mt-4 p-3 rounded-full bg-primarycolor`}>
             <Text style={tw`text-white text-center font-bold text-2xl`}>Check Out</Text>
            </TouchableOpacity>
          }

      </View>  
      </ScrollView>
      </View>
  );
};




const styles = StyleSheet.create({
  row: {
      flexDirection: 'row',
   },
  input: {
    width:"90%",
    height:60,
    marginLeft:5,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 0.75,
    ...FONTS.body3,
    padding: 10,
    marginVertical: 8,
       
  },
  input2: {
    width:"40%",
    height:60,
    marginLeft:5,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 0.85,
    ...FONTS.body3,
    padding: 10,
    marginVertical: 8,
    
  },
});


export default CreditCardForm;



