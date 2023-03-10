import { useNavigation } from "@react-navigation/native";
import { Component, useState } from "react";
import { Alert } from "react-native";
import { TextInput } from "react-native";
import { Image, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



// class func extends Component{
//   constructor(props){
//     super(props);

//     this.state={
//       value: 0
//     }
//   }

//   addition = () =>{
//     let initialValue = this.state.value;
//     this.setState({
//       value: initialValue + 1
//     })
//   }

//   subtraction = () =>{
//     let initialValue = this.state.value;
//     this.setState({
//       value: initialValue - 1
//     })
//   }
//   render(){
    
//   }
// }




const HomeScreen = () => {
  const [value, setValue] = useState(1);  
  const navigation = useNavigation()

  
  return ( 
    
      <View style={{flex:1, borderWidth:1}}>

        <View style={{flex:0.5,  flexDirection:'row', }}>
          <View style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Logo</Text>
          </View>

          <View style={{flex:9,   marginLeft:4, marginRight:2, marginTop:1 }}>
            <TextInput 
              style={{width:'100%', borderWidth:1, height:"100%", borderRadius:10}}
              placeholder="Search Products"
            />                  
          </View>
        </View>

        <View style={{flex:1.3,  flexDirection:'row'}}>
          <View style={{margin:5, width:100, borderRadius:5}}>
            <View style={{alignItems:"center",  flex:3.5, justifyContent:'center'}}>
              <Image 
                style={{height:"100%", width:"100%", resizeMode:'center'}}
                source={require('../assets/groceries-shop.png')}
              />
            </View>

            <View style={{flex:1.5}}>
              <TouchableOpacity onPress={()=> navigation.navigate('Groceries')} style={{alignItems:"center",backgroundColor:'#69265A',justifyContent:'center', width:100, height:26, borderRadius:5}}>
                <Text style={{color:"white"}}>Groceries</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ margin:5, width:100, borderRadius:5}}>
            <View style={{alignItems:"center",  flex:3.5, justifyContent:'center'}}>
              <Image 
                style={{height:"100%", width:"100%", resizeMode:"contain"}}
                source={require('../assets/repair-shop.png')}
              />
            </View>

            <View style={{  flex:1.5, }}>
              <TouchableOpacity onPress={()=> navigation.navigate('Repairs')} style={{alignItems:"center",backgroundColor:'#2CB34A',justifyContent:'center', width:100, height:26, borderRadius:5}}>
                <Text style={{color:"white"}}>Repairs</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ margin:5, width:100, borderRadius:5}}>
            <View style={{  flex:3.5,}}>
              <Image 
                style={{height:"100%", width:"100%", resizeMode:"contain"}}
                source={require('../assets/gas-delivery.png')}
              />
            </View>

            <View style={{flex:1.5}}>
            <TouchableOpacity onPress={()=> navigation.navigate('GasDeliveries')} style={{alignItems:"center",backgroundColor:'#819830',justifyContent:'center', width:100, height:26, borderRadius:5}}>
                <Text style={{color:"white"}}>Gas Deliveries</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex:3, borderWidth:1}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", flex:1}}>
            <View style={{borderWidth:1, width:130, alignItems:"center", backgroundColor:"#FF8080", borderRadius:5}}>
              <Text>NEW PRODUCT</Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate('Products')}>
                <Text style={{color:'red'}}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex:9,  flexDirection:'row'}}>
            <View style={{ flex:1, margin:10, borderRadius:10, flexDirection:'column'}}>
              <View style={{flex:5, justifyContent:'center', alignItems:"center", borderRadius:10}}>
                <Image 
                  style={{height:'100%', width:"100%", resizeMode:'contain' }}
                  source={require('../assets/Kienyeji-Mangoes.png')}
                />
              </View>

              <View style={{flex:3.5,}}>
                <Text>Ksh. 20</Text>
                <Text style={{fontWeight:'700', fontSize:18}}>Kienyeji Mangoes</Text>
                <Text>Qty. 1</Text>
              </View>

              <View style={{flex:1.5}}>
              <TouchableOpacity onPress={()=> navigation.navigate('AddToCart')} style={{ backgroundColor:"#007F7F", width:180, height:28, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex:1, margin:10, borderRadius:10, flexDirection:'column'}}>
              <View style={{flex:5, justifyContent:'center', marginLeft:-55, borderRadius:10}}>
              <Image
                style={{height: '100%'}} 
                source={require('../assets/water-dispenser.png')}
              />         
              </View>

              <View style={{flex:3.5,}}>
                <Text>Ksh. 300</Text>
                <Text style={{fontWeight:'700', fontSize:18}}>Dispenser Re-fill </Text>
                <Text>Qty. 20 litres</Text>
              </View>

              <View style={{flex:1.5}}>
                <TouchableOpacity onPress={()=> navigation.navigate('AddToCart')} style={{ backgroundColor:"#007F7F", width:180, height:28, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>

            
          </View>
        </View>

        <View style={{flex:2, borderWidth:1}}>
          <View style={{borderWidth:1, flex:1.5, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{borderWidth:1, width:100,alignItems:'center', backgroundColor:"#9F7F7F"}}>
              <Text style={{color:'white'}}>DAILY NEEDS</Text>
            </View>

            <View>
              <TouchableOpacity onPress={()=> navigation.navigate('Products')}>
                <Text style={{color:'red'}}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{borderWidth:1, flex:8.5, flexDirection:'row'}}>
            <View style={{borderWidth:1, flex:3, }}>
              <Image 
                source={require('../assets/cabbage.png')}
              />
            </View>

            <View style={{borderWidth:1, flex:6, paddingLeft:10, justifyContent:'center'}}>
              <Text style={{marginBottom:5}}>Total Ksh.{value * 100}</Text>
              <Text style={{marginBottom:5, fontSize: 18, fontWeight:"700"}}>Uncut Cabbage</Text>
              <Text>Qty. {value} </Text>
            </View>

            <View style={{borderWidth:1, flex:1, justifyContent:'space-between', alignItems:'center'}}>
              <TouchableOpacity onPress={()=> setValue(value + 1)} style={{backgroundColor:'#F8A300', width:30, height:30, borderRadius:20, marginTop:2, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24, fontWeight:'900', color:'white'}}>+</Text>
              </TouchableOpacity>

              <Text style={{fontSize:24, fontWeight:'900'}}>{value}</Text>

              <TouchableOpacity onPress={()=>value >1 ? setValue(value -1): Alert.alert('Cannot go below 1 item.')} style={{backgroundColor:'#F8A300', width:30, height:30, borderRadius:20, marginTop:2, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24, fontWeight:'900', color:'white'}}>-</Text>
              </TouchableOpacity>

              
            </View>
          </View>
        </View>

        <View style={{flex:3.2, marginBottom:2}}>
          <Button title='Event Details' onPress={()=>navigation.navigate('Events')} />
          <Button title='Customer Profile' onPress={()=>navigation.navigate('CustomerProfile')} />
          <Button title='Settings' onPress={()=>navigation.navigate('Settings')} />
          <Button title="Shop Profile" onPress={()=> navigation.navigate('ShopProfile')} />
          <Button title="SignUp" onPress={()=>navigation.navigate('Signup')} />
          <Button title="Login" onPress={()=>navigation.navigate('Login')} />
          <Button title='Proceed to Payment' onPress={()=>navigation.navigate('Checkout')} />
        </View>



      </View>
    
  );
}


const styles = StyleSheet.create({
  screen: {
    flex:1,
  }
})
 
export default HomeScreen;