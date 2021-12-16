import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text, 
  Keyboard,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal,
  Pressable

} from "react-native";

import { Image, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";

import Task from "../components/Task";
import Addtask from "../components/Addtask";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";

function CheckListScreen() {

  const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalBellVisible, setModalBellVisible] = useState(false);

  const [showFormTask, setShowFormTask] = useState(false);
  const [task, setTask] = useState([
  ]);


//eliminer les tâches
  const DeleteTask = (titre) => {
    setTask((taskactuelles) => {
      return taskactuelles.filter((task) => task.titre !== titre);
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
      
      {/* en-tête */}
      <View style={styles.container}>
      
        
        <View style={styles.topView}>
        <Image
          style={styles.Logo}
          source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
        />
    <View style={styles.iconView}>
    <Button 
    icon={<FontAwesomeIcon icon={faUser} style={styles.icon} size={25} />}
    type={"clear"}
    onPress={() => setModalUserVisible(true) }
    />
    <Modal
    transparent={true}
    visible={modalUserVisible}
    >
      <View style={{backgroundColor:"#131256aa", flex:1}}>
        <View style={{backgroundColor:"#FFB81Faa", margin:50, padding:40, borderRadius:10}}>
          <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate('FirstScreen')}
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
      icon={<FontAwesomeIcon icon={faBell} style={styles.icon} size={25} />}
      type={"clear"}
      onPress={() => setModalBellVisible(true)}
    />
    <Modal
    transparent={true}
    visible={modalBellVisible}
    >
      <View style={{backgroundColor:"#131256aa", flex:1}}>
        <View style={{backgroundColor:"#FFB81Faa", margin:50, padding:40, borderRadius:10}}>
          <Text style={styles.textBell}>Pas de nouvelles notifications</Text>
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
      
      {/* fin en-tête */}
        <View style={styles.containerChecklist}>
          <Text style={styles.textChecklist}>CheckList</Text>
        </View>


        <ScrollView>
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
          
              <Task 
              task={task} DeleteTask={DeleteTask} />
            </>
           )} 
         
        </View>
        </ScrollView>
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
    justifyContent: "center",
    marginLeft: 20,
  },
  Logo: {
    alignSelf: "flex-start",
    marginLeft: 0,
    marginTop: 0,
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
  },
  textChecklist: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 30,
    justifyContent: "center",
    color: "#131256",
    textAlign: 'center'
  },
  icon: {
    color: "#131256",
  },

  containerTask: {
    padding: 10,
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

  icon: {
    width: 30,
    height: 30,
    color:"#131256",
    },
    
    topView: {
    width: 348,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 50,
    justifyContent: "space-between"
    },

    iconView: {
      flexDirection: "row",
      alignSelf: "flex-end",
      justifyContent: "space-between"
      // marginLeft: 70,
    
      },
    
    pressable:{
    width: 250,
    height:56,
    backgroundColor: "#131256",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: 'center',
    
    },
    
    smallPressable: {
    alignSelf: 'center',
    width: 80,
    height:40,
    backgroundColor: "#FFB81F",
    marginTop: 10,
    justifyContent: 'center',
    },
    
    textBell : {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: "#131256",
    justifyContent: "flex-start",
    alignSelf: 'center'
    },
    
    textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
    alignSelf:"center",
    
    }, 
});

export default CheckListScreen;