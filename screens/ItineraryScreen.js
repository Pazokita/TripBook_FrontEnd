import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Button, Switch } from "react-native-elements";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";
import AddEtape from "../components/AddEtape";

function ItineraryScreen(props) {
  // SWITCH //
  const [isEnabled, setIsEnabled] = useState(false);
  const [showVilleRetour, setShowVilleRetour] = useState(true);

  const [villeDepart, setVilleDepart] = useState("");
  const [villeRetour, setVilleRetour] = useState("");
  const [departRetour, setDepartRetour] = useState([]);

  const [etapes, setEtapes] = useState([]);
  const [jour, setJour] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [showFormEtape, setshowFormEtape] = useState(false);

  const inputVilleRetour = (
    <TextInput
      style={styles.input}
      placeholder="Ville de retour"
      onChangeText={(texte) => setVilleRetour(texte)}
    />
  );

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled === false) {
      setShowVilleRetour(inputVilleRetour);
    } else {
      setShowVilleRetour();
    }
  };

  ///Fonts
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });

  //condition pas de chiffre négatif
  if (jour < 0) {
    setJour(0);
  }

  //ajouter villes depart/retour
  const addDepartRetour = () => {
    const villeDR = { villeDepart, villeRetour };
    console.log(villeDR);

    //ajouter le state
    const newdepartretour = [...departRetour, villeDR];
    setDepartRetour(newdepartretour);

    //reset champs
    setVilleDepart("");
    setVilleRetour("");
  };

  const handlDRetShowForm = () => {
    addDepartRetour();
    setShowForm();
  };

  const handlshowFormEtape2 = () => {
    setshowFormEtape(true);
  };

  //ajouter une étapes
  const addEtape = () => {
    const etape = { ville, jour };
    // console.log(etape);

    //ajouter le state
    const newetape = [...etapes, etape];
    setEtapes(newetape);

    //reset champs
    setVille("");
    setJour("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require("../assets/Logo_Bleu_Trip_Book.png")}
        alignItems="center"
      />
      <View style={styles.header}>
        <TextInput style={styles.textTitle} value="Voyage au Japon" />
        <MaterialCommunityIcons
          name="pencil"
          size={24}
          style={styles.iconCrayon}
        />
      </View>

      {/* formulaire */}
      <ScrollView>
        {showForm ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Ville départ"
              onChangeText={(texte) => setVilleDepart(texte)}
            />
            <View style={styles.viewSwitch}>
              <Switch
                value={isEnabled}
                color="#131256"
                onValueChange={toggleSwitch}
              />
              <Text style={styles.paragraphe}>
                Ville de départ différente de la ville de retour
              </Text>
            </View>

            {showVilleRetour}
            <TouchableHighlight
              style={styles.sendbutton}
              onPress={() => handlDRetShowForm()}
            >
              <Text style={styles.textbtn}>Continuer</Text>
            </TouchableHighlight>
          </>
        ) : (
          <>
            <Text style={styles.text}>Ville de départ</Text>

            {departRetour.map((item, i) => (
              <>
                <View style={styles.cardDepart}>
                  <Text style={styles.textDR}>{item.villeDepart}</Text>
                </View>
                <Text style={styles.text}>Ville de retour</Text>
                <View style={styles.cardDepart}>
                  <Text style={styles.textDR}>{item.villeRetour}</Text>
                </View>
                <TouchableHighlight
                  style={styles.btnAdd}
                  onPress={() => handlshowFormEtape2()}
                >
                  <Text style={styles.textbutton}>Ajoute une ville</Text>
                </TouchableHighlight>

                {showFormEtape ? (
                  <AddEtape
                    etapes={etapes}
                    setEtapes={setEtapes}
                    setshowFormEtape={setshowFormEtape}
                  />
                ) : (
                  <>
                    {/* Liste d'étapes */}
                    <Text style={styles.text}>Etapes</Text>
                    {etapes.map((item, i) => (
                      <View style={styles.containerEtape}>
                        <Text style={styles.textDR}>
                          {" "}
                          {item.ville} - {item.jour} jours
                        </Text>
                        <MaterialCommunityIcons
                          name="pencil"
                          size={24}
                          style={styles.iconEdit}
                        />
                        <AntDesign
                          name="closecircle"
                          size={30}
                          color="#F91A35"
                          style={styles.iconCancel}
                        />
                      </View>
                    ))}

                    <Button
                      title="J'invite mes covoyageurs"
                      titleStyle={styles.textbutton}
                      buttonStyle={styles.sendbutton}
                      onPress={() =>
                        props.navigation.navigate("InvitationScreen")
                      }
                    />
                  </>
                )}
              </>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  Logo: {
    marginLeft: 20,
    marginTop: 30,
    width: 107,
    height: 92,
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 30,
    justifyContent: "center",
    color: "#FFB81F",
    alignItems: "center",
  },
  iconCrayon: {
    color: "#FFB81F",
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
    marginBottom: 10,
    marginHorizontal: 10,
  },
  viewSwitch: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 5,
    marginHorizontal:20,
    justifyContent: "center",
  },
  paragraphe: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: "#131256",
  },
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346,
    alignSelf: "center",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  textbtn: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    color: "white",
  },
  text: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 20,
    justifyContent: "center",
    color: "#131256",
    marginHorizontal: 10,
  },
  cardDepart: {
    backgroundColor: "rgba(255,184,31,0.09)",
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
    marginHorizontal: 10,
  },
  textDR: {
    color: "#131256",
    fontSize: 20,
    fontFamily: "Poppins_300Light",
    marginTop: 10,
    marginVertical: 10,
  },
  btnAdd: {
    padding: 5,
    backgroundColor: "#FFB81F",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  },
  iconEdit: {
    paddingLeft: 120,
    paddingTop: 10,
    color: "#6FC761",
  },
 
  containerEtape: {
    backgroundColor: "rgba(255,184,31,0.09)",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
  },
  iconCancel: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  iconCrayon: {
    alignSelf: "center",
    color: "#FFB81F",
    marginLeft: 10,
  }

});

export default ItineraryScreen;
