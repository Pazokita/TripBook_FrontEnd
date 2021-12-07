import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Image, Button, Input } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
import { color } from "react-native-elements/dist/helpers";

function SignUpScreen(props) {
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
      <Text style={styles.subTitle}>Inscription</Text>
      <Text style={styles.text}>Je m’inscris pour inviter mes co-voyageurs</Text>
      <View style={styles.inputView}>
      <Text style= {styles.text}>email</Text>
      <Input/>
      <Text style= {styles.text}>nom d'utilisateur</Text>
      <Input/>
      <Text style= {styles. text}>mot de passe</Text>
      <Input/>
      </View>
      <Button
        title="Je créé mon compte"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      />
      <Button
        title="J'ai déjà un compte"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('SignInScreen')}
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
    backgroundColor: 'white'
  },
//   bigLogo: {
//     width: 257,
//     height: 236,
//   },
  
  mediumLogo: {
    width:107,
    height:92,
    marginBottom: 30
  },

  subTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    justifyContent: "center",
    color: '#131256'
  },

  desc: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 48,
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "center",
    color: 'white'
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
    fontSize: 15,
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
   height: 340,
   marginTop: 20
  },

  sendbutton: {
    width: 347,
    height:56,
    backgroundColor: "#FFB81F",
    marginTop: 20,
  },
});

export default SignUpScreen;