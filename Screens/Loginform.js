import React,{ useState } from 'react';
import { ScrollView,View,Text,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import { Globalstyles } from '../Styles/GobalStyle';
import { logo } from '../Const/images';
import { CustomButton } from '../Const/Button';
import { FirebaseAuth } from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



const LoginSubmit = ({navigation }) => {

const [Email, setEmail] = useState('');
const [Password, setPassword] = useState("");
const auth = FirebaseAuth;


//signin user with email and password
const Submit = async () => {
  try {
    const response = await signInWithEmailAndPassword(auth,Email,Password)
    console.log(response)
    navigation.navigate("Home") 
   }catch (error) {
     console.log(error)
     Alert.alert("Please Create Email Id & Password!")
    }
    setEmail('')
    setPassword('')
   };
  

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
<CustomButton text='Login' onPressButton={Submit} />


{/* hyperlink signup */}
<View style={Globalstyles.hyperlink_container}>
<Text style={Globalstyles.account_text}>Don't have a account? </Text>

<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text style={Globalstyles.hyperlink_text}>Sign Up</Text>
  </TouchableOpacity>
</View>

 </ScrollView>
    </View>

 );
}


export default LoginSubmit;






