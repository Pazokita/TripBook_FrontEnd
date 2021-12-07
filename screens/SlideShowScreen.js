import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';

// import Slideshow from 'react-native-slideshow';



function SlideShowScreen(props) {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });

  return (
    <View style={styles.container}>
        <Image
        style={styles.bigLogo}
        source={require('../assets/Logo_Blanc_Trip_Book.png')}
      />
        <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('TripCreationScreen')}
      />
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: '#131256'
  },
  bigLogo: {
    width: 100,
    height: 92,
    justifyContent: 'flex-start',
    marginBottom: 30
  },
   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    justifyContent: "center",
    color: 'white',
    textAlign: 'center'
  },
  textPetit: {
    fontFamily: 'Poppins_300Light',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    marginBottom: 30
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346,
    marginBottom: 50,
  },
  slideshow1: {
    width: 200,
      height: 400,
      resizeMode: 'cover',
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 30,
      borderRadius: 30,
  },
  slideshow: {
      width: 200,
      height: 400,
      resizeMode: 'cover',
      marginRight: 50,
      marginBottom: 30,
      borderRadius: 30,
  }
});

export default SlideShowScreen;


