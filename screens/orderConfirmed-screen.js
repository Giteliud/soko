import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";


const OrderConfirmedScreen = () => {
  const navigation = useNavigation();
  return ( 
    <View style={{flex:1}}>
      <View style={{borderWidth:1, flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:38, padding:5}}>We've got your order!</Text>
      </View>

      <View style={{ flex:4, alignItems:'center'}}>
        <View style={{flex:1, justifyContent:'center', height:100, width:200, alignItems:'center'}}>
          <Image 
            style={{height:'100%', width:'100%', resizeMode:'contain'}}
            source={require("../assets/Kienyeji-Mangoes.png")}
          />
        </View>

        <View style={{flex:1, width:250, justifyContent:'space-around'}}>
          <Text style={{fontSize:26}}>Kienyeji Mangoes</Text>
          <Text style={{fontSize:26}}>3 items</Text>
          <Text style={{fontSize:26}}>Total: 60</Text>
        </View>
      </View>

      <View style={{ flex:3, flexDirection:'row'}}>
        <View style={{ flex:1.5}}>
          <Image 
            style={{height:'100%', width:'100%', resizeMode:'contain'}}
            source={require('../assets/success.png')}
          />
        </View>

        <View style={{ flex:3.5, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:20, padding:5}}>Hey Buddy! We've received your order today. It's estimated to be delivered by 5:05 pm</Text>
        </View>
      </View>

      <View style={{ flex:2}}>
        <View style={{justifyContent:'center', alignItems:'center', height:100+"%", flexDirection:'row', padding:6}}>
          <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')} style={{borderWidth:1, alignItems:'center', justifyContent:'center', width:50 +"%", height:35, borderRadius:10, backgroundColor:'#B343B3'}}>
            <Text style={{color:'white', fontSize:20}}>Start a new Order</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('OrderDetails')} style={{borderWidth:1, alignItems:'center', justifyContent:'center', width:50 +"%", height:35, borderRadius:10, backgroundColor:'#7626FE', marginLeft:10}}>
            <Text style={{color:'white', fontSize:20}}>Order Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default OrderConfirmedScreen;