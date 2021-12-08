import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Image, Button, Input } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
import { color } from "react-native-elements/dist/helpers";

function SignInScreen(props) {
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light
    
      });
  return (
    <View style={styles.container}>
      <Image 
      style={styles.mediumLogo}
      source={require('../assets/Logo_Bleu_Trip_Book.png')}/>
      <Text style={styles.subTitle}>Se connecter</Text>
      <View style={styles.inputView}>
      <Text style= {styles. text}>email</Text>
      <Input/>
      <Text style= {styles. text}>mot de passe</Text>
      <Input/>
      </View>
      <Button
        title="Valider"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
      <Text style= {styles. smallText}>mot de passe oublié?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    backgroundColor: 'white'
  },
  bigLogo: {
    width: 257,
    height: 236,
  },
  
  mediumLogo: {
    width:107,
    height:92,
    marginBottom: 50
  },

  subTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 50,
    justifyContent: "center",
    color: '#131256'
  },

   text: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 48,
    marginBottom: 10,
    justifyContent: "center",
    color: 'white'
  },

  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 

  text: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    color: "#131256"
  },

  smallText: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#131256",
    marginTop: 30
  },

  inputView: {
   borderRadius: 20,
   backgroundColor: "rgba(255,184,31,0.15)",
   opacity: 50,
   width: 348,
   height: 240,
  },

  sendbutton: {
    width: 347,
    height:56,
    backgroundColor: "#FFB81F",
    marginTop: 40,
  },
});

export default SignInScreen;
