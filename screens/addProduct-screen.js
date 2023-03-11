import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";


const AddProductScreen = () => {
  const navigation = useNavigation();
  return ( 
    <View style={styles.screen}>
      <View>
      <Text>This is the AddProduct</Text>
      </View>

      <View>
      <TouchableOpacity onPress={() => navigation.navigate('OrderConfirmed')}>
        <Text style={{color:'dodgerblue', fontSize:28}}>Order Now</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default AddProductScreen;