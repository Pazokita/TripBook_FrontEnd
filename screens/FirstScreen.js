import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Text, Image, Button } from "react-native-elements";

function FirstScreen(props) {
  return (
    <View style={styles.container}>
      <text style={styles.text}>Bienvenue</text>
      <text style={styles.textPetit}>sur</text>
      <Image
        style={styles.bigLogo}
        source={require("./assets/Logo_Tripbook_No_Earth_Gray.svg")}
      />
      <text style={styles.textPetit}>L'appli de voyage collaborative</text>
      <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
      />
      <text>ou</text>
      <Button
        title="J'ai déjà un compte"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
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
  },
  bigLogo: {
    width: 257,
    height: 236,
  },

  text: {
    fontFamily: "Playfair Display",
    fontWeight: "black",
    fontSize: 48,
    marginBottom: 10,
    justifyContent: "center",
  },
  textPetit: {
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
  },
  sendbutton: {
    backgroundColor: "#84817a",
  },
});

export default FirstScreen;
