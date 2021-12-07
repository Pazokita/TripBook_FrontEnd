import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


function ItineraryScreen(props) {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Itinerary Screen</Text>
      <Image
        style={styles.bigLogo}
        source={require('../assets/Logo_Blanc_Trip_Book.png')}
      />
       
       <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('SignUpScreen')}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    backgroundColor: '#131256'
  },
  bigLogo: {
    width: 257,
    height: 236,
  },

   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 48,
    justifyContent: "center",
    color: 'white'
  },
 
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346,
    marginTop:50
  },
});

export default ItineraryScreen;
