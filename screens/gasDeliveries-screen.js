import { StyleSheet, Text, View } from "react-native";


const GasDeliveriesScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>These are the available gas delivery shops</Text>
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
 
export default GasDeliveriesScreen;