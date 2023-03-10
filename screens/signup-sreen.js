import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";


const SignupScreen = () => {
  return ( 
    <View style={{flex:1}}>
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:40, fontWeight:900, padding:5}}>Sign Up</Text>
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22, }}
          placeholder="Username"
        />
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22, }}
          placeholder="email"
        />
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22, }}
          placeholder="Phone Number"
        />
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22,}}
          placeholder="Password"
        />
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput 
          style={{borderWidth:1, width:350, height: 45, borderRadius: 25, padding: 10, fontSize:22,  }}
          placeholder="Confirm Password"
        />
      </View>

      
      <View style={{flex:1,}}>
        <View style={{justifyContent:'center', alignItems:'flex-start', paddingLeft:20}}>

        <Text style={{fontSize:16, }}>By signing up, you agree to Ts and Cs.</Text>
        </View>
        <View style={{ justifyContent:'center', alignItems:'center'}}>
          
          <TouchableOpacity style={{borderWidth:1, width:300, height:50, justifyContent:'center', alignItems:'center', backgroundColor:'#032E7F', borderRadius:20, }}>
            <Text style={{color:'white', fontSize:18}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default SignupScreen;