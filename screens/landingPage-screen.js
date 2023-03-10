import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";


const LandingPageScreen = () => {
  const navigation = useNavigation();
  return ( 
    <View style={styles.screen}>
      <View style={{borderWidth:1, flex:3, justifyContent:'center', alignItems:'center'}}>
        <Text>logo</Text>
      </View>

      <View style={{borderWidth:1, flex:2, alignItems:'center', justifyContent:'center'}}>
        <View>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>

          <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>

          <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20, 
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  }
})
 
export default LandingPageScreen;