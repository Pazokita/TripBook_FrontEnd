import React from "react";

import { StyleSheet, View, Text } from "react-native";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';

import { Image, Button } from "react-native-elements";

function FirstScreen(props) {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue</Text>
      <Text style={styles.textSur}>sur</Text>
      <Image
        style={styles.bigLogo}
        source={require('../assets/Logo_Blanc_Trip_Book.png')}
      />
      <Text style={styles.textPetit}>L'appli de voyage</Text>
      <Text style={styles.textPetit2}>collaborative</Text>
      <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('SlideShowScreen')}
      />
      <Text style={{color: 'white', fontFamily: 'Poppins_300Light', fontSize: 14, marginTop: 10, marginBottom: 10}}>ou</Text>
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
  textSur: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    justifyContent: "center",
    color: 'white',
    marginBottom: 50
  },
  textPetit: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: "center",
    color: 'white',
    marginTop: 30
  },
  textPetit2: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: "center",
    color: 'white',
    marginBottom: 30
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346
  },
});

export default FirstScreen;
