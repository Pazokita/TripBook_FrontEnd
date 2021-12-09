import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";
import Icon from "react-native-vector-icons/FontAwesome";


function Task({ task, DeleteTask }) {

    const handleDelete = titre => {
        // console.log('eliminando....', id);
        DeleteTask(titre)
    }
    console.log (task)
  return (
    <View>
      {task.map((item, i) =>(
        
     
      <View style={styles.task}>
        <Text style={styles.textTitre}>Titre :</Text>
        <Text multiline={true} style={styles.textTask}>
          {item.titre}
        </Text>
        <Text style={styles.textTitre}>Description :</Text>
        <Text multiline={true} style={styles.textTask}>
          {item.description}
        </Text>
        <Text style={styles.textTitre}>Personne en charge :</Text>
        <Text multiline={true} style={styles.textTask}>
          {item.assignation}
        </Text>
        <Text style={styles.textTitre}>Deadline :</Text>
        <Text multiline={true} style={styles.textTask}>
          {item.deadLine}
        </Text>
        <Text style={styles.textTitre}>Etat :</Text>
        <Text multiline={true} style={styles.textTask}>
          {item.etat}
        </Text>
        
        <TouchableHighlight
          style={styles.btn}
          onPress={() => handleDelete(item.titre)}
        >
            <Text style={styles.textbtn}>Eliminer la tâche</Text>
          
        </TouchableHighlight>
     
      </View>
       ))}
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
  textbtn:{
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    color: "white",
  },
  btn: {
    padding: 5,
    backgroundColor: "red",
  },
});

export default Task;
