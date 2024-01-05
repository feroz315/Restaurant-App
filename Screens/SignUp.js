import React,{ useState } from 'react';
import { TextInput,View,Text,Image,TouchableOpacity,ScrollView, Alert } from 'react-native';
import { Globalstyles } from "../Styles/GobalStyle"
import { logo } from '../Const/images';
import { CustomButton } from '../Const/Button';
import { FirebaseAuth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { firebase } from 'react-native-firebase/database';
// import { database } from '../Config/firebase';


const SignUp = ({navigation}) => {

const [Name, setName] = useState('');
const [Email, setEmail] = useState('');
const [Password, setPassword] = useState('');
const auth = FirebaseAuth;


const UserSignUp = async () => {
try {
 const response = await createUserWithEmailAndPassword(auth,Email,Password,Name)
 console.log(response)
  navigation.navigate("Login") 

}catch(e) {
  Alert.alert("Error", e.message)    
}
 setName('')
 setEmail('')
 setPassword('')
}


return (


  <View style={Globalstyles.container_2}>

  {/*logo */}
  <Image
      source={logo}
      resizeMode='contain'
      style={Globalstyles.logo} />


  <ScrollView>

    {/* signin form */}
<View>

{/* name field*/}
<TextInput
  value={Name}
  autoCapitalize='none'
  style={Globalstyles.input}
  placeholder='Enter your Name'
  onChangeText={(text) => setName(text)}/>

{/* email field */}
<TextInput
  value={Email}
  autoCapitalize='none'
  style={Globalstyles.input}
  placeholder='Enter your Email'
  onChangeText={(text) => setEmail(text)}/>

{/* password field*/}
<TextInput
  value={Password}
  autoCapitalize='none'
  secureTextEntry={true}
  style={Globalstyles.input}
  placeholder='Enter your Password'
  onChangeText={(text) => setPassword(text)}/>

</View>

{/* signin button */}
<CustomButton text='Sign Up' onPressButton={UserSignUp} />


{/* hyperlink signup */}
<View style={Globalstyles.hyperlink_container}>
<Text style={Globalstyles.account_text}>Already have a account? </Text>

<TouchableOpacity onPress={() => navigation.navigate('Login')}>
<Text style={Globalstyles.hyperlink_text}>Login</Text>
</TouchableOpacity>
</View>
</ScrollView>
</View>


  );
}


export default SignUp;












