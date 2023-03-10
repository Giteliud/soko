import { StyleSheet, Text, View } from "react-native";


const ForgotPasswordScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>Recover your account here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
    justifyContent:'center',
    alignItems:"center",
    flex:1
  }
})
 
export default ForgotPasswordScreen;