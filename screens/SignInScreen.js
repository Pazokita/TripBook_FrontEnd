import React from "react";
import { StyleSheet, View, Text } from "react-native";

// import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';

function SignInScreen() {
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light
    
      });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN IN</Text>
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
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 48,
    marginBottom: 10,
    justifyContent: "center",
    color: 'white'
  },
  /* textPetit: {
    fontFamily: "Playfair Display",
    fontWeight: "black",
    fontSize: 24,
    marginBottom: 10,
    justifyContent: "center",
  },
  textbutton: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  }, */
  sendbutton: {
    backgroundColor: "#84817a",
  },
});

export default SignInScreen;
