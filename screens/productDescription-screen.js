import { StyleSheet, Text, View } from "react-native";


const ProductDescriptionScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>This is the ProductDescription</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default ProductDescriptionScreen;