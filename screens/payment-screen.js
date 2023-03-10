import { StyleSheet, Text, View } from "react-native";


const PaymentScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text style={{fontSize:22, color:'white'}}>Make your M-Pesa payment here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20, 
    backgroundColor:'#2CB34A',
    flex:1,
    justifyContent:'center',
    alignItems:"center",
  }
})
 
export default PaymentScreen;