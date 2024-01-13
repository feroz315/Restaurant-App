import React,{ useState } from 'react';
import { ScrollView,View,Text,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import { Globalstyles } from '../Styles/GobalStyle';
import { logo } from '../Const/images';
import { CustomButton } from '../Const/Button';
import { FirebaseAuth } from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';



const LoginSubmit = ({navigation }) => {

const [Email, setEmail] = useState('');
const [Password, setPassword] = useState("");
const [hidePass, setHidePass ] = useState(true)
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
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
  <TextInput
      value={Password}
      autoCapitalize='none'
      secureTextEntry={hidePass ? true : false}
      style={Globalstyles.input}
      placeholder='Enter your Password'
      onChangeText={(text) => setPassword(text)}/>
      <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
       <Icon name={hidePass ? 'eye-slash' : 'eye'} size={16} color="#007BFF" style={{marginRight:10}}/>
         </TouchableOpacity>
     </View>
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






