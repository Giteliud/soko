import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";


const CustomerProfileScreen = () => {
  const navigation = useNavigation()
  
  return ( 
    <View style={styles.screen}>
      <View style={{ flex:1, flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{ flex:2.5, flexDirection: 'row'}}>
          <View style={{borderWidth:1, flex:1, justifyContent:'center', alignItems:'center', marginBottom:5}}>
            <Text>img</Text>
          </View>

          <View style={{ flex:4, justifyContent:'center'}}>
            <Text style={{paddingLeft:8}}>My Orders</Text>
          </View>
        </View>
        <View style={{ flex:2.5, flexDirection: 'row'}}>
          <View style={{borderWidth:1, flex:1, justifyContent:'center', alignItems:'center', marginBottom:5}}>
            <Text>img</Text>
          </View>

          <View style={{ flex:4, justifyContent:'center'}}>
            <Text style={{paddingLeft:8}}>My Favorite</Text>
          </View>
        </View>
        <View style={{ flex:2.5, flexDirection: 'row'}}>
          <View style={{borderWidth:1, flex:1, justifyContent:'center', alignItems:'center', marginBottom:5}}>
            <Text>img</Text>
          </View>

          <View style={{ flex:4, justifyContent:'center'}}>
            <Text style={{paddingLeft:8}}>Payment Details</Text>
          </View>
        </View>
        <View style={{ flex:2.5, flexDirection: 'row'}}>
          <View style={{borderWidth:1, flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>img</Text>
          </View>

          <View style={{ flex:4, justifyContent:'center'}}>
            <Text style={{paddingLeft:8}}>My Account</Text>
          </View>
        </View>

      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        
        <Button title='Proceed to Payment' onPress={()=>navigation.navigate('Checkout')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
    flex:1,
    flexDirection:'column',
  }
})
 
export default CustomerProfileScreen;