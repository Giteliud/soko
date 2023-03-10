import { StyleSheet, Text, View } from "react-native";


const ChangePaymentMethodScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text style={{fontSize:20}}>This is the Screen to change Payment method</Text>
      <Text style={{fontSize:18}}>We are only accepting M-pesa payment method at the moment.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor:'#FE7885',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
 
export default ChangePaymentMethodScreen;