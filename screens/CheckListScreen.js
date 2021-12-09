import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text, 
  Keyboard,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,

} from "react-native";

import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Task from "../components/Task";
import Addtask from "../components/Addtask";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";

function CheckListScreen() {
  const [showFormTask, setShowFormTask] = useState(false);
  const [task, setTask] = useState([
    {
      id: "1",
      titre: "visa",
      description: "recherche visa",
      personneEnCharge: "Anna",
      deadLine: "3 juin 2022",
      état: "fait",
    },
    {
      id: "2",
      titre: "visite",
      description: "recherche visite",
      personneEnCharge: "Juliette",
      deadLine: "3 juin 2022",
      état: "en cours",
    },
    {
      id: "3",
      titre: "diner",
      description: "recherche diner",
      personneEnCharge: "Gabriel",
      deadLine: "3 juin 2022",
      état: "à faire",
    },
  ]);


//eliminer les tâches
  const DeleteTask = (id) => {
    setTask((taskactuelles) => {
      return taskactuelles.filter((task) => task.id !== id);
    });
  };

  //Montrer form Add Task
  const ShowForm = () => {
    setShowFormTask(!showFormTask);
  };

  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });
  //fermer clavier
  const fermerClavier = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => fermerClavier()}>
      <View style={styles.container}>
        <Image
          style={styles.Logo}
          source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Trip Japon / 10 jours</Text>
        </View>
        <View style={styles.containerChecklist}>
          <Icon
            name="list"
            iconStyle={styles.icon}
            color={"#131256"}
            size={30}
          ></Icon>
          <Text style={styles.textChecklist}>CheckList</Text>
        </View>

        <View style={styles.containerTask}>
          <TouchableHighlight style={styles.btnAdd} onPress={() => ShowForm()}>
            <Text style={styles.textbtn}>Ajoute une tâche</Text>
          </TouchableHighlight>
          {showFormTask ? (
            <Addtask
              task={task}
              setTask={setTask}
              setShowFormTask={setShowFormTask}
            />
          ) : (
            <>
              {/* Liste de taches */}
              <Text style={styles.notask}>
                {task.length > 0 ? "" : "Pas de tâches en cours"}
              </Text>
              <FlatList
                data={task}
                renderItem={({ item }) => (
                  <Task task={item} DeleteTask={DeleteTask} />
                )}
              />
            </>
          )}
        </View>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  containerTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerChecklist: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  Logo: {
    marginLeft: 20,
    marginTop: 20,
    width: 79,
    height: 50,
  },
  textTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 30,
    justifyContent: "center",
    color: "#FFB81F",
    marginTop: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  textChecklist: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 48,
    justifyContent: "center",
    color: "#131256",
    marginRight: 20,
  },
  icon: {
    color: "#131256",
  },

  text: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 30,
    justifyContent: "center",
    color: "#FFB81F",
    marginTop: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  containerTask: {
    padding: 20,
    backgroundColor: "rgba(255,184,31,0.09) ",
  },
  containerAdd: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#131256",
    backgroundColor: "white",
    padding: 20,
  },
  btn: {
    padding: 5,
    margin: 0,
    color: "#131256",
  },
  notask: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#131256",
  },
  textbtn: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    color: "white",
  },
  btnAdd: {
    padding: 5,
    backgroundColor: "#FFB81F",
    borderRadius: 2,
    marginTop: 20,
  },
});

export default CheckListScreen;
