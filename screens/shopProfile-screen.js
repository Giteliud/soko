import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";


const ShopProfileScreen = () => {
  const navigation = useNavigation()
  
  return ( 
    <View style={styles.screen}>
      <Text>This is the ShopProfile</Text>
      <Button title='Add Product' onPress={()=> {navigation.navigate('AddProduct')}} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default ShopProfileScreen;