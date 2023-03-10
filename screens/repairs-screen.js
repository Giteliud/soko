import { StyleSheet, Text, View } from "react-native";


const RepairsScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>These are the available repair shops.</Text>
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
 
export default RepairsScreen;