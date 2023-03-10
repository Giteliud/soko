import { StyleSheet, Text, View } from "react-native";


const EventDetailScreen = () => {
  return ( 
    <View style={styles.screen}>
      <Text>This is the EventDetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20
  }
})
 
export default EventDetailScreen;