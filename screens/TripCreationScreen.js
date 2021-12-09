import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';






import { Image, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";


function TripCreationScreen(props) {
  const [adulte, setAdulte] = useState(0);
  const [enfant, setEnfant] = useState(0);
  const [isSelected, setSelection] = useState(false);
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });

  // DATE TIME PICKER DEPART //
  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())
  }
  //////

  // DATE TIME PICKER RETOUR //
  
  //////

///// NOMBRE DE VOYAGEURS ////
  if(adulte < 0){
    setAdulte(0)
  }

  if(enfant <0){
    setEnfant(0)
  }
////////////

// CHECKBOX //
var enableInput = true;

if(isSelected){
  enableInput = false;
}
//
  

  return (
    <View style={styles.container}>
      
      <Image
        style={styles.bigLogo}
        source={require('../assets/Logo_Bleu_Trip_Book.png')}
      />
      <ScrollView style = {{flex : 1}}>
      <View>
        <Text style={styles.text}>Nom du voyage</Text>
        <TextInput style={styles.input} placeholder="Voyage au Japon" />

      <Text style={styles.text}>Dates du départ et de retour</Text>
      <Icon.Button
        name="calendar"
        backgroundColor="rgba(255,184,31,0.09)"
        iconStyle={styles.icon}
        
      >
        <TextInput style={styles.textCalendar} placeholder="Date de départ" editable={enableInput} />
      </Icon.Button>
      
      <Icon.Button
        name="calendar"
        backgroundColor="rgba(255,184,31,0.09)"
        iconStyle={styles.icon}
        >
        <TextInput style={styles.textCalendar} placeholder="Date de retour" editable={enableInput}/>
      </Icon.Button>

      <View style={{flexDirection: 'row', backgroundColor: "rgba(255,184,31,0.15)", borderTopColor: '#FFB81F', borderTopWidth: 2}}>
        <Checkbox value={isSelected} onValueChange={setSelection} style={styles.checkbox} color={isSelected ? '#131256' : undefined}/>
        <Text style={styles.input2}>Pas encore de dates</Text>
      </View>
      
      <Text style={styles.text}>Nombre de voyageurs</Text>
      <Icon.Button backgroundColor="rgba(255,184,31,0.09)">
        <Text style={styles.textVoyageur}>Adulte(s)</Text>
        <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setAdulte(adulte - 1)}
                        />
        <Text style={styles.textButtomNumber}>{adulte}</Text>
        <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setAdulte(adulte + 1)}
                        />
      </Icon.Button>

      <Icon.Button backgroundColor="rgba(255,184,31,0.09)">
          <Text style={styles.textVoyageur}>Enfant(s)</Text>
          <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setEnfant(enfant - 1)}
                        />
          <Text style={styles.textButtomNumber}>{enfant}</Text>
          <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setEnfant(enfant + 1)}
                        />
        </Icon.Button>
      </View>
     

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Je passe à l'étape suivante"
          titleStyle={styles.textButtom}
          buttonStyle={styles.sendbutton}
          onPress={() => props.navigation.navigate("ItineraryScreen")}
        />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
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
    color: '#131256',
    textAlign: 'left',
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
    
    padding: 10,
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
  iconPlus : {
    marginBottom:10, marginTop:10
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
  checkbox: {
    alignSelf: 'center', 
    marginLeft: 7,
    borderColor: '#131256',
    borderRadius: 10,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  }
});

export default TripCreationScreen;