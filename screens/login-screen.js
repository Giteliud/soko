import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";


const LoginScreen = () => {
  const navigation = useNavigation();
  return ( 
    <View style={{flex:1, flexDirection:'column'}}>
      <View style={{flex:1, borderWidth:1, flexDirection:'row', justifyContent: "space-between", alignItems:'center'}}>
        <Text style={{fontSize:30, paddingLeft: 20, fontWeight:900}}>Welcome Back!</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
          <Text style={{fontSize:22, color:'blue', paddingRight:5}}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      

      <View style={{flex:2, justifyContent:'center', alignItems:'center', borderWidth:1}}>
        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22, marginBottom:20 }}
          placeholder="Phone Number"
        />

        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22,}}
          placeholder="Password"
        />
        <View style={{alignItems:'flex-end', width: '100%'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
            <Text style={{fontSize:18, color:'blue'}}>forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex:3,justifyContent:'center', alignItems:'center'}}>
        
      
          
          <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{borderWidth:1, width:300, height:50, justifyContent:'center', alignItems:'center', backgroundColor:'#032E7F', borderRadius:20, }}>
            <Text style={{color:'white', fontSize:18}}>Sign In</Text>
          </TouchableOpacity>
        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default LoginScreen;