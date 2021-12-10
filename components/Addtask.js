import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  
} from "react-native";
import { Image, Button, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";
import DateTimePicker from "@react-native-community/datetimepicker";
import Calendar from "react-native-calendar-range-picker";


function Addtask({ task, setTask, setShowFormTask }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const [assignation, setassignation] = useState("");
  //const [deadline, setDeadline] = useState("");
  const [etat, setEtat] = useState("");

  //const [mode, setMode] = useState("date");
  //const [show, setShow] = useState(false);

  //const onChange = (event, selectedDate) => {
  //  const currentDate = selectedDate || date;
  //  setShow(Platform.OS === "ios");
  //  setDate(currentDate);
  //};

  //const showMode = (currentMode) => {
  //  setShow(true);
  //  setMode(currentMode);
  //};

  //const showDatepicker = () => {
  //  showMode("date");
  //};
  //const hideDatePicker = () => {
  //  setShow(false);
  //};
  //const confirmerDate = (date) => {
  //   const opcions = { year: "numeric", month: "long", day: "2-digit" };
  //  setDeadline(date.toLocaleDateString("es-ES", opcions));
  //  hideDatePicker();
  //};
  //Ajouter une tâche
  const addNewTask = () => {
    //validation ds champs
    //    // Validar
    //    if(titre.trim() === '' ||
    //    descrition.trim() === '' ||
    //    assignation.trim() === '' ||
    //    etat.trim() === '' )
    //    {
    //        // Probleme champs non rempli
    //        ShowAlerte();

    //    // Muestra la alerta si falla la validación
    //    const ShowAlerte = () => {
    //     Alert.alert(
    //         'Error', // Titulo
    //         "Tu n'as pas rempli tous les champs", // mensaje
    //         [{
    //             text: 'OK' // Arreglo de botones
    //         }]
    //     )
    // }
    //        return;
    //    }

    //creer une tâche
    const tasks = { titre, description, assignation, etat };
    console.log(tasks)
    //ajouter le state
    const newTask = [...task, tasks];
    setTask(newTask);
    //oculter le formulaire
    setShowFormTask(false);
   //reset form
  };
  

  //SAVE DATE

  //Ajd
  var today = new Date();
  var jour = today.getDate()
  var mois = 0
  if (today.getMonth() === 11) {
    mois = 12
  } else {
    mois = today.getMonth() + 1;
  }
  var annee = today.getFullYear();
  var fullDay = `${annee}-${mois}-${jour}`

  //Save Date Limite
  const [date, setDate] = useState(fullDay);

  const [limitDate, setLimitDate] = useState();
  const [visible, setVisible] = useState(false);

  const savingDate = (date) => {
    console.log(date)
    setLimitDate(date)
  }

  const toggleOverlay = () => {
    setVisible(!visible);
};
  

 


  return (
   
    <View>
      
        <View style={styles.task}>
          <Text style={styles.textTitre}>Titre :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texte) => setTitre(texte)}
          ></TextInput>
          <Text style={styles.textTitre}>Description :</Text>
          <TextInput
            multiline={true}
            style={styles.input}
            onChangeText={(texte) => setDescription(texte)}
          ></TextInput>
          <Text style={styles.textTitre}>Personne en charge :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texte) => setassignation(texte)}
          ></TextInput>

      <Icon.Button
        name="calendar"
        backgroundColor="rgba(255,184,31,0.09)"
        iconStyle={styles.icon}
        onPress={toggleOverlay}
      >
      <Text style={styles.textCalendar}>Date de limite : {limitDate}</Text>

      </Icon.Button>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle = {{width : "90%", height : "70%"}}>
            <Calendar
                disabledBeforeToday	= "true"
                startDate={date}
                singleSelectMode
                onChange={(date) => savingDate(date)}                
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

          <Text style={styles.textTitre}>Etat :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texte) => setEtat(texte)}
          ></TextInput>
          <TouchableHighlight style={styles.btn} onPress={() => addNewTask()}>
            <Text style={styles.textbtn}>Ajoute une tâche</Text>
          </TouchableHighlight>
        </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 20,
  },

  textTitre: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#131256",
  },
  textTask: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    color: "#131256",
  },
  input: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    color: "#131256",
    borderWidth: 1,
    borderRadius: 0.5,
    padding: 5,
  },
  textbtn: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    color: "white",
  },
  btn: {
    padding: 5,
    backgroundColor: "#FFB81F",
    borderRadius: 2,
    marginTop: 20,
  },
  icon: {
    color: "#131256",
  },
  textCalendar: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#131256",
  },
});
export default Addtask;
