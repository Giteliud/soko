import { StyleSheet, Text, View } from "react-native";


const GroceriesScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>These are the available grocery stores/vibandas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})
 
export default GroceriesScreen;