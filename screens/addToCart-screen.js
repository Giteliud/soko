import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";


const AddToCartScreen = () => {
  const navigation = useNavigation()
  
  return ( 
    <View style={styles.screen}>
      <Text>You have successfully addet item to cart</Text>
      <Button title='Add Product' onPress={()=> {navigation.navigate('AddProduct')}} /> 
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
 
export default AddToCartScreen;