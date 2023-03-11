import { StyleSheet, Text, View } from "react-native";


const OrderDetailsScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>These are the Details of the order</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
 
export default OrderDetailsScreen;