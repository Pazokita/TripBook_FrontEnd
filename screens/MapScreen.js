import React, {useState} from "react";
import { StyleSheet, View, Text, Modal, Pressable} from "react-native";

import { Image, Button, Input} from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import MapView from 'react-native-maps';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";



function MapScreen(props) {

  const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalBellVisible, setModalBellVisible] = useState(false);

    return(

      <View style={styles.container}>
          <MapView style={{flex:1} }
             initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
            }}
          />
          

            <View style={styles.top}>
                  <Image
                      style={styles.Logo}
                      source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
                      onPress={() => props.navigation.navigate('HomeScreen')} />
                  <View>
                  <Text style={styles.topText}>Carte</Text>
                  </View>
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
        </View>   
      
    )
}

const styles = StyleSheet.create({

  container: {
    flex:1
  },
    
  top: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    backgroundColor: 'white',
    height: 150,
    width: 500,
  },

  Logo: {
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    width: 79,
    height: 50,
  },

  topText: {
      marginTop:20,
      marginLeft: 70,
      fontFamily: "PlayfairDisplay_900Black",
      fontSize: 24,
      color: '#131256',
      alignSelf:"center",
  },

  icon: {
    width: 30,
    height: 30,
    color:"#131256",
  },

  iconView: {
      flexDirection: "row",
      marginLeft: 70,
      marginTop:20,
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
})
export default MapScreen;