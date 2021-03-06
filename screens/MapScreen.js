import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable} from "react-native";

import { Image, Button, Input} from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";



 
function MapScreen(props) {

  const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalBellVisible, setModalBellVisible] = useState(false);
  const [listMarks, setListMarks] = useState(props.marqueursList);
  const [departETArrivee, setDepartETArrivee]= useState(props.villesDetA);
  const [dureeEtape, setDureeEtape] = useState([]);
 
  
console.log('props.villesDetA', props.villesDetA)


  useEffect(() => {
    async function mapLoad() {
      const response = await fetch('https://tripbook-lacapsule.herokuapp.com/marqueurs', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `voyageIDFromFront=${props.voyageID}`
      }); 
      console.log('chargement 2')
      const rawresponse = await response.json()
      console.log("rawresponse route MARQUEUR", rawresponse)
  
      //setListMarks(rawresponse.villesMarked)
      setListMarks(rawresponse.villesToMarked)
      console.log("LISTE VILLES ETAPES ????", listMarks)
  
      //setDepartETArrivee(rawresponse.tableauVilleDetA)
      setDepartETArrivee(rawresponse.tableauVilleDetA)
      //console.log(departETArrivee)
  
      setDureeEtape(rawresponse.tableauDureeEtapes)
      console.log("DUREES ETAPES ????", dureeEtape)
    } 
    mapLoad()
  }, [props.marqueursList]);

  const intitiateMarks = listMarks.map((ville, i)=> { 

    var dureeFront = "Durée : " + ville.dureeVille + " jours"
 
    return (
      <Marker
        key = {i}
        coordinate={{ latitude : ville.latitudeAPI , longitude : ville.longitudeAPI }}
        title = {ville.nomVille}
        description = {dureeFront}
        pinColor="blue"
      />
    )
  })

  const initiateDetA = departETArrivee.map((ville, i) => {

    var desc = ""
    if (i==0) {
      desc = "Départ"
    } else {
      desc = "Arrivée"
    }

    var dateFront = desc + " : " +  ville.cityDate

    return (
      <Marker
        key = {i}
        coordinate={{ latitude : ville.latitudeAPI , longitude : ville.longitudeAPI }}
        title = {ville.nom}
        description = {dateFront}
        pinColor="red"
      />
    )
  })



    return(

      <View style={styles.container}>
          <MapView 
             style={{flex:1} }
             initialRegion={{
             latitude: 	48.856614,
             longitude: 2.3522219,
             latitudeDelta: 20,
             longitudeDelta: 20,
            }}
          >
            {intitiateMarks}
            {initiateDetA}
          </MapView>

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

function mapStateToProps(state){
  return { voyageID: state.voyageID,
    marqueursList : state.marqueursList,
    villesDetA : state.villesDetA
  }
}

export default connect(mapStateToProps, null)(MapScreen);

