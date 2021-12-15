import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from "react-native";
import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

function AddEtape({etapes, setEtapes, setshowFormEtape}) {
    ///Fonts
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });

  const [ville, setVille] = useState("");
  const [jour, setJour] = useState(0);
 
  const handlshowFormEtape = () => {
    addEtape();
    setshowFormEtape(false);
  };
  //ajouter une étapes
  const addEtape = () => {
    const etape = { ville, jour };
    console.log(etape);

    //ajouter le state
    const newetape = [...etapes, etape];
    setEtapes(newetape);

    //reset champs
    setVille("");
    setJour("");
  };

  return (
    <>
  

    <Icon.Button
      backgroundColor="rgba(255,184,31,0.09)"
      style={{ justifyContent: "space-between", marginTop: 0 }}
    >
      <TextInput
        style={styles.paragraphe}
        placeholder="Ville d'étape"
        onChangeText={(texte) => setVille(texte)}
      />
      <View style={{ flexDirection: "row" }}>
        <AntDesign
          name="minuscircle"
          size={30}
          color="rgba(255,184,31,1)"
          style={styles.iconPlus}
          onPress={() => setJour(jour - 1)}
        />
        <Text style={styles.paragraphe}>{jour} jour(s)</Text>
        <AntDesign
          name="pluscircle"
          size={30}
          color="rgba(255,184,31,1)"
          style={styles.iconPlus}
          onPress={() => setJour(jour + 1)}
        />
         <AntDesign
          name="checkcircle"
          size={30}
          color="#6FC761"
          style={styles.iconPlus}
          onPress={() => handlshowFormEtape()}
        />
      </View>
    </Icon.Button>
  

  </>
  );
}

const styles = StyleSheet.create({
 
  paragraphe: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: "#131256",
    alignSelf: "center",
  },
  text: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 20,
    justifyContent: "center",
    color: "#131256",
    marginHorizontal: 10,
  },
  iconPlus: {
    margin: 10,
  }

});
export default AddEtape;
