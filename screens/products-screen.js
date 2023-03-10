import { StyleSheet, Text, View } from "react-native";


const ProductsScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>These are the products available today.</Text>
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
 
export default ProductsScreen;