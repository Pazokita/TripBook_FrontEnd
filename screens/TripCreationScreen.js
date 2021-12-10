import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';


import { Image, Button, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";
import Calendar from "react-native-calendar-range-picker";


function TripCreationScreen(props) {

  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });

  const [adulte, setAdulte] = useState(0);
  const [enfant, setEnfant] = useState(0);
  const [isSelected, setSelection] = useState(false);

  const [visible, setVisible] = useState(false);

  const [startingDate, setStartingDate] = useState(fullDay);
  const [endingDate, setEndingDate] = useState(fullDay);
  
  // AFFICHER OVERLAY
  const toggleOverlay = () => {
      setVisible(!visible);
  };

  const savingDate = ({startDate, endDate}) => {
    console.log({ startDate, endDate })
    setStartingDate(startDate)
    setEndingDate(endDate)
  }
  
  //Ajd
  var today = new Date();
  var jour = today.getDate()
  var mois = 0
  if (today.getMonth() === 11) {
    mois = 12
  } else {
    mois = today.getMonth() +1;
  }
  var annee = today.getFullYear();
  var fullDay = `${annee}-${mois}-${jour}`

  
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
const [enable, setEnable]  = useState(false);

const deleteDates = () => {
  setSelection(!isSelected)
  console.log(isSelected)
  if(isSelected === false){
    setStartingDate()
    setEndingDate()
    setEnable(true)
  } else {
    setStartingDate(startingDate)
    setEndingDate(endingDate)
    setEnable(false)
  }
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
        onPress={toggleOverlay}
        disabled={enable}
      >
      <Text style={styles.textCalendar}>Date de départ : {startingDate}</Text>

      </Icon.Button>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle = {{width : "90%", height : "70%"}}>
            <Calendar
                disabledBeforeToday	= "true"
                startDate={startingDate}
                endDate={endingDate}
                onChange={({startDate, endDate}) => savingDate({startDate, endDate})}
                style={{ 
                    container: {backgroundColor:'rgba(255,184,31,1)'},
                    monthContainer: {},
                    weekContainer:{},
                    monthNameText: {},
                    dayNameText: {},
                    dayText: {},
                    dayTextColor: '#131256',
                    holidayColor: 'rgba(100,100,254,0.30)',
                    todayColor: 'rgba(255,184,31,1)',
                    disabledTextColor: 'black',
                    selectedDayTextColor: 'rgba(255,184,31,1)',
                    selectedDayBackgroundColor: '#131256',
                    selectedBetweenDayTextColor: 'rgba(255,184,31,1)',
                    selectedBetweenDayBackgroundTextColor: '#131256',
                }}
            />
            <Button title ="Valider"
                buttonStyle={{backgroundColor: '#FFB81F',height:"40%", width: "100%", borderRadius:10, marginTop:"10%"}}
                onPress={toggleOverlay}   
            />
        </Overlay>
      
      
      <Icon.Button
        name="calendar"
        backgroundColor="rgba(255,184,31,0.09)"
        iconStyle={styles.icon}
        >
        <Text style={styles.textCalendar}>Date de retour : {endingDate}</Text>
      </Icon.Button>

      <View style={{flexDirection: 'row', backgroundColor: "rgba(255,184,31,0.15)", borderTopColor: '#FFB81F', borderTopWidth: 2}}>
        <Checkbox value={isSelected} onValueChange={()=> deleteDates()} style={styles.checkbox} color={isSelected ? '#131256' : undefined}/>
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