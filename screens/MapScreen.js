import React, { Fragment } from "react";
import { StyleSheet, View, Text} from "react-native";

import { Image, Button, Input} from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import MapView from 'react-native-maps';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";


function MapScreen(props) {
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
                  <FontAwesomeIcon icon={faUser} style={styles.icon} size={25} />
                  <FontAwesomeIcon icon={faBell} style={styles.icon} size={25} />
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
    // padding: 50,
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
      textAlign: "center",
      fontFamily: "PlayfairDisplay_900Black",
      fontSize: 24,
      justifyContent: "center",
      color: '#131256'
  },

  icon: {
    width: 30,
    height: 30,
    color:"#131256",
    marginRight: 10,
  },

  iconView: {
      flexDirection: "row",
      marginLeft: 90,
      marginTop:20,
  }
})
export default MapScreen;