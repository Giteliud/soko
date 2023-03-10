import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";


const CheckoutScreen = () => {
  const navigation = useNavigation()
  
  return ( 
    <View style={styles.screen}>
      <View style={{ flex:2.5, flexDirection:'row', backgroundColor:'#D34CB5'}}>
        <View style={{ flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:22, paddingLeft:2, marginBottom:4}}>Carlitos,</Text>
          <Text style={{fontSize:22, paddingLeft:2, marginBottom:4}}>Booster Area,</Text>
          <Text style={{fontSize:22, paddingLeft:2, marginBottom:4}}>Egerton Main-Gate,</Text>
          <Text style={{fontSize:22, paddingLeft:2}}>Egerton.</Text>
        </View>

        <View style={{ flex:1, justifyContent:"center", alignItems:'center'}}>
          <Button title="Change Address" onPress={()=> navigation.navigate('ChangeAddress')} color='black'  />
        </View>
      </View>

      <View style={{ flex:2.5, flexDirection:'row', backgroundColor:'#2CB34A'}}>
        <View style={{ flex:1, justifyContent:'center'}}>
          <View style={{flex:1, borderWidth:1, justifyContent:"center", alignItems:"center", backgroundColor:"#B68B54", borderRadius:4}}>
          <Text style={{fontSize:22, paddingLeft:2, marginBottom:4}}>Payment Method</Text>
          </View>

          <View style={{flex:4, flexDirection:'row'}}>
            <View style={{borderWidth:1, flex:2, justifyContent:"center", alignItems:"center", height:20, marginTop:60}}>
              <Text>img</Text>
            </View>

            <View style={{ flex:3, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:21, paddingLeft:2, marginBottom:4}}>Visa ...4006</Text>
              <Text style={{fontSize:18, paddingLeft:2, marginBottom:4}}>Exp 08/24</Text>
            </View>
          </View>

        </View>

        <View style={{ flex:1, justifyContent:"center", alignItems:'center'}}>
          <Button title="Change Payment Method" onPress={()=> navigation.navigate('ChangePaymentMethod')} color='black'  />
        </View>
      </View>

      

      <View style={{ flex:4}}>
        <View style={{ flex:1.5, justifyContent:'center', width:170, alignItems:'center', backgroundColor:'#819830', borderRadius:4, marginBottom:2}}>
          <Text style={{fontSize:24, color:'white'}}>Your Order</Text>
        </View>

        <View style={{ flex:3.5, flexDirection:'row'}}>
          <View style={{borderWidth:1, flex:1.5, justifyContent:"center", alignItems:"center"}}>
            <Text>img</Text>
          </View>

          <View style={{ flex:3.5, marginLeft:2}}>
            <View style={{ flex:2, flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
              <Text style={{fontSize:18, fontWeight:700}}>Kienyeji Mangoes</Text>
              <Text style={{fontSize:18}}>Ksh. 20</Text>
            </View>

            <View style={{ flex:3}}>
              <Text style={{fontSize:16}}>Our Mangoes are organic and come straight from Ukambani.</Text>
            </View>
          </View>
        </View>

        <View style={{ flex:5, flexDirection:'row'}}>
          <View style={{flex:1, }}>
            <Text>Order Calculation</Text>
          </View>

          <View style={{flex:2, flexDirection:"column"}}>
            
            <View style={{flex:2}}>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>SUbtotal</Text>
                <Text>100.00</Text>
              </View>

              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>Taxes</Text>
                <Text>5.00</Text>
              </View>

              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>Total</Text>
                <Text>105.00</Text>
            </View>

            <View style={{flex:1.5}}>
              
              <Button title="Pay Ksh. 105 M-Pesa" onPress={()=>navigation.navigate("Payment")} />
            </View>

            <View style={{flex:1.5}}>
              <Button title="Change Payment Method" onPress={()=> navigation.navigate('ChangePaymentMethod')} color='black'  /> 
            </View>


            </View>
          </View>
        </View>
      </View>

      <View style={{ flex:1}}>
        <Text>Bottom Tabs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection:'column',
    
  }
})
 
export default CheckoutScreen;