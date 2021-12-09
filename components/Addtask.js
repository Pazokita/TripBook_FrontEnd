import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  ScrollView,
  
} from "react-native";
import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";
import DateTimePicker from "@react-native-community/datetimepicker";

function Addtask({ task, setTask, setShowFormTask }) {
  const [titre, setTitre] = useState("");
  const [descrition, setDescription] = useState("");

  const [assignation, setassignation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [etat, setEtat] = useState("");

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const hideDatePicker = () => {
    setShow(false);
  };
  const confirmerDate = (date) => {
    const opcions = { year: "numeric", month: "long", day: "2-digit" };
    setDeadline(date.toLocaleDateString("es-ES", opcions));
    hideDatePicker();
  };
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
    const tasks = { titre, descrition, assignation, etat };
    console.log(tasks)
    //ajouter le state
    const newTask = [...task, tasks];
    setTask(newTask);
    //oculter le formulaire
  //setShowFormTask(false);
   //reset form
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

          <View>
            <Text style={styles.textTitre}>Deadline :</Text>
            <View>
              <Button onPress={showDatepicker} title="Show date picker!" />
            </View>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                onConfirm={confirmerDate}
                onCancel={hideDatePicker}
              />
            )}

            <Text>{deadline}</Text>
          </View>

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
});
export default Addtask;
