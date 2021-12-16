import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
} from "react-native";

import { Image, Button, ListItem, Input } from "react-native-elements";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";

import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Header() {
const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalBellVisible, setModalBellVisible] = useState(false);
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light,
      });

      return (
<View style={styles.container}>
<Image
  style={styles.mediumLogo}
  source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
/>
<View style={styles.iconView}>
  <Button
    icon={
      <FontAwesomeIcon icon={faUser} style={styles.icon} size={25} />
    }
    type={"clear"}
    onPress={() => setModalUserVisible(true)}
  />
  <Modal transparent={true} visible={modalUserVisible}>
    <View style={{ backgroundColor: "#131256aa", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FFB81Faa",
          margin: 50,
          padding: 40,
          borderRadius: 10,
        }}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate("FirstScreen")}
        >
          <Text style={styles.textbutton}>Deconnexion</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          // onPress={() => props.navigation.navigate('FirstScreen')}
        >
          <Text style={styles.textbutton}>Paramètres</Text>
        </Pressable>
        <Pressable
          style={styles.smallPressable}
          onPress={() => setModalUserVisible(false)}
        >
          <Text style={styles.textbutton}>Fermer</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
  <Button
    icon={
      <FontAwesomeIcon icon={faBell} style={styles.icon} size={25} />
    }
    type={"clear"}
    onPress={() => setModalBellVisible(true)}
  />
 
  <Modal transparent={true} visible={modalBellVisible}>
    <View style={{ backgroundColor: "#131256aa", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FFB81Faa",
          margin: 50,
          padding: 40,
          borderRadius: 10,
        }}
      >
        <Text style={styles.textBell}>Blabla</Text>
        <Pressable
          style={styles.smallPressable}
          onPress={() => setModalBellVisible(false)}
        >
          <Text style={styles.textbutton}>Fermer</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
</View>
</View>
  );
}

const styles = StyleSheet.create({
mediumLogo: {
    width: 79,
    height: 50,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  iconView: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 150,
  },
  textTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 30,
    justifyContent: "center",
    color: "#FFB81F",
    marginTop: 20,
    alignItems: "center",
  },
  smallPressable: {
    alignSelf: "center",
    width: 80,
    height: 40,
    backgroundColor: "#FFB81F",
    marginTop: 10,
    justifyContent: "center",
  },

  textBell: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: "#131256",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  pressable: {
    // flexDirection: "row",
    width: 250,
    height: 56,
    backgroundColor: "#131256",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
  },

  icon: {
    color: "#131256",
  },
});

export default Header;