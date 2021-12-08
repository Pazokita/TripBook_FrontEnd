import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Image } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


function ChatScreen() {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Map Screen</Text>
      <Image
        style={styles.bigLogo}
        source={require('../assets/Logo_Bleu_Trip_Book.png')}
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
      backgroundColor: 'white',
      
      
    },
    bigLogo: {
      width: 257,
      height: 236,
    },
    textTitle: {
      fontFamily: "PlayfairDisplay_900Black",
      fontSize: 30,
      justifyContent: "center",
      color: "#FFB81F",
      marginTop: 20,
      alignItems: "center",
      marginBottom: 40 
    }
  });

export default ChatScreen;