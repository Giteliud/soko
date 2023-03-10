import { createStackNavigator } from '@react-navigation/stack';
import AddProductScreen from '../screens/addProduct-screen';
import ChangeAddressScreen from '../screens/changeAddress-screen';
import CheckoutScreen from '../screens/checkout-screen';
import CustomerProfileScreen from '../screens/customerProfile-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import ProductDescriptionScreen from '../screens/productDescription-screen';
import SettingScreen from '../screens/settings-screen';
import ShopProfileScreen from '../screens/shopProfile-screen';
import SignupScreen from '../screens/signup-sreen';
import ChangePaymentMethodScreen from '../screens/changePaymentMethod-screen';
import PaymentScreen from '../screens/payment-screen';
import AddToCartScreen from '../screens/addToCart-screen';
import GasDeliveriesScreen from '../screens/gasDeliveries-screen';
import RepairsScreen from '../screens/repairs-screen';
import GroceriesScreen from '../screens/groceries-screen';
import ProductsScreen from '../screens/products-screen';
import ForgotPasswordScreen from '../screens/forgotPassword-screen';
import LandingPageScreen from '../screens/landingPage-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen name="Events" component={EventDetailScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="CustomerProfile" component={CustomerProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProductDescription" component={ProductDescriptionScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="ShopProfile" component={ShopProfileScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ChangeAddress" component={ChangeAddressScreen} />
      <Stack.Screen name="ChangePaymentMethod" component={ChangePaymentMethodScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="AddToCart" component={AddToCartScreen} />
      <Stack.Screen name="GasDeliveries" component={GasDeliveriesScreen} />
      <Stack.Screen name="Repairs" component={RepairsScreen} />
      <Stack.Screen name="Groceries" component={GroceriesScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="LandingPage" component={LandingPageScreen} />
    </Stack.Navigator>
  );
}