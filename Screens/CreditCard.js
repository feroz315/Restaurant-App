import React, { useEffect, useState } from 'react';
import { StyleSheet, View,TextInput,Text,Image,TouchableOpacity } from 'react-native';
import { CustomButton } from '../Const/Button';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Const/theme';
import { SIZES, FONTS } from '../Const/theme';
import { s as tw } from "react-native-wind";
import { themeColors } from '../Styles/theme';
import * as Icon from "react-native-feather";


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
  
  return (

    
<View style={{ flex:1, backgroundColor:COLORS.white, justifyContent:'center',alignItems:'center'}}>
    
  <TouchableOpacity 
    onPress={()=>navigation.goBack()} 
    style={tw`absolute top-12 left-4 bg-gray-50 p-2 rounded-full shadow`}>
    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
   </TouchableOpacity>
   <View style={{flex:1,alignSelf:'center',width:"100%",marginLeft:10,marginVertical:100}}>
    <Text style={tw`text-3xl mb-4 text-center w-full rounded-full`}>Payment Details</Text>
     <TextInput
        style={styles.input}
        placeholder="Cardholder Name"
        value={name}
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
      

            {name == '' || cardNumber == '' || expiration == '' || cvv == '' ? null
            :
            <CustomButton text="Pay Now" onPressButton={() => navigation.navigate("OrderScreen")}/>}
      </View>  
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



