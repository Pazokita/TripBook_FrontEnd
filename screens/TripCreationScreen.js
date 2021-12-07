import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

import { Image, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";


function TripCreationScreen(props) {
  const [count, setCount] = useState(0);

  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.Logo}
          source={require("../assets/Logo_Bleu_Trip_Book.png")}
        />
      </View>
      <Text style={styles.text}>Nom du voyage</Text>

      <TextInput style={styles.input} value="TripJapan/10jours" />
      <Text style={styles.text2}>Dates du départ et de retour</Text>

      <Icon.Button
        name="calendar"
        backgroundColor="rgba(255,184,31,0.09)"
        iconStyle={styles.icon}
      >
        <Text style={styles.textCalendar}>Selectionner vos dates ici</Text>
      </Icon.Button>

      <TextInput style={styles.input2} value="Pas encore de dates" />

      <Text style={styles.text3}>Nombre de voyageurs</Text>
      <Icon.Button backgroundColor="rgba(255,184,31,0.09)">
        <Text style={styles.textVoyageur}>Adulte</Text>
        <Icon
          name="plus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.iconplus}
          size={20}
          onClick={() => setCount(count + 1)}
        ></Icon>
        <Text style={styles.textButtomNumber}>{count}</Text>
        <Icon
          name="minus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20} 
          onClick={() => setCount(count - 1)}
        ></Icon>
      </Icon.Button>

      <Icon.Button backgroundColor="rgba(255,184,31,0.09)">
        <Text style={styles.textVoyageur}>Enfant</Text>
        <Icon
          name="plus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.iconplus}
          size={20}
        ></Icon>
        <Text style={styles.textButtomNumber}>3</Text>
        <Icon
          name="minus-circle"
          backgroundColor="rgba(255,184,31,0.09)"
          iconStyle={styles.icon}
          size={20} 
        ></Icon>
      </Icon.Button>

     

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Valider"
          titleStyle={styles.textButtom}
          buttonStyle={styles.sendbutton}
          onPress={() => props.navigation.navigate("ItineraryScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    width: 107,
    height: 92,
  },

  text: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    marginTop: 50,
  },
  text2: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    marginTop: -30,
  },
  text3: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    marginTop: 20,
  },
  textCalendar: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#131256",
  },
  textButtom: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  },
  textButtomNumber:{
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#131256",
    paddingHorizontal: 10
  },
  input: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    marginBottom: 50,
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
    borderBottomColor: "#FFB81F",
    borderBottomWidth: 2,
  },
  input2: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
    marginTop: -3,
    borderTopColor: "#FFB81F",
    borderTopWidth: 2,
  },
  input3: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
    marginTop: 10,
  },
  input4: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
  },
  icon: {
    color: "#131256",
  },
  iconplus: {
    color: "#131256",
   
   
  },
  
  textVoyageur: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#131256",
    paddingRight:150

  },
  sendbutton: {
    marginTop: 60,
    backgroundColor: "#FFB81F",
    width: 346,
  },
});

export default TripCreationScreen;
