import { StyleSheet, Text, View } from "react-native";


const SettingScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>This is the AccountSettings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default SettingScreen;