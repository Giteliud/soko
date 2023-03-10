import { StyleSheet, Text, View } from "react-native";


const LoginScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>This is the Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default LoginScreen;