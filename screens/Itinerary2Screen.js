import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import { Image, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";



function Itinerary2Screen(props) {
    const [count, setCount] = useState(0);
  
  
    useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Japon/10 jours</Text>
      </View>
      <Text style={styles.textEtapes}>Ville de départ</Text>

      <TextInput style={styles.input} value="Paris" />


      <Text style={styles.textEtapes}>Etapes</Text>
      <Icon.Button backgroundColor="rgba(255,184,31,0.09) ">
        <Text style={styles.textVoyageur}>Tokyo</Text>
        <Icon
          name="plus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20}
          onPress={() => setCount(count + 1)}
        ></Icon>
        <Text style={styles.textButtomNumber}>{count} jrs</Text>
        <Icon
          name="minus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20} 
          onPress={() => setCount(count - 1)}
        ></Icon>
      </Icon.Button>
      <Icon.Button backgroundColor="rgba(255,184,31,0.09) ">
        <Text style={styles.textVoyageur}>Tokyo</Text>
        <Icon
          name="plus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20}
          onPress={() => setCount(count + 1)}
        ></Icon>
        <Text style={styles.textButtomNumber}>{count} jrs</Text>
        <Icon
          name="minus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20} 
          onPress={() => setCount(count - 1)}
        ></Icon>
      </Icon.Button>
      <Icon.Button backgroundColor="rgba(255,184,31,0.09) ">
        <Text style={styles.textVoyageur}>Tokyo</Text>
        <Icon
          name="plus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20}
          onPress={() => setCount(count + 1)}
        ></Icon>
        <Text style={styles.textButtomNumber}>{count} jrs</Text>
        <Icon
          name="minus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20} 
          onPress={() => setCount(count - 1)}
        ></Icon>
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },

  Logo: {
    marginLeft: 20,
    marginTop: 20,
    width: 79,
    height: 50,
  },
  containerTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 30,
    justifyContent: "center",
    color: "#FFB81F",
    marginTop: 20,
    alignItems: "center",
  },
  textEtapes: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    color: "#131256",
    marginVertical: 10
  },
  input: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
    borderBottomColor: "#FFB81F",
    borderBottomWidth: 2,
  },
  icon: {
    color: "#FFB81F",
  },
 
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  textPetit2: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: 30,
  },
  textVoyageur: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#131256",
    paddingRight:150

  },
  textButtomNumber:{
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#131256",
    paddingHorizontal: 10
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  },
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346,
  },
});

export default Itinerary2Screen;
