import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";


const ShopProfileScreen = () => {
  const navigation = useNavigation()
  
  return ( 
    <View style={{flex:1}}>
      <View style={{flex:1, flexDirection:'column'}}>

        <View style={{flex:1}}>
          <TouchableOpacity style={{}}>
            <Text style={{color:'dodgerblue', fontSize:30}}>Your Orders</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1}}>
          <TouchableOpacity style={{}}>
            <Text style={{color:'dodgerblue', fontSize:30}}>Favorites</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1}}>
          <TouchableOpacity style={{}}>
            <Text style={{color:'dodgerblue', fontSize:30}}>Payment Information</Text>
          </TouchableOpacity>
        </View>

        
      </View>

      <View style={{flex:1}}>
      <Button color='green'  title='Add Product' onPress={()=> {navigation.navigate('AddProduct')}} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default ShopProfileScreen;