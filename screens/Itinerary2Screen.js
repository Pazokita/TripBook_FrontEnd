import React, {useEffect, useState} from "react";

import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, ScrollView , Modal, Pressable} from "react-native";
import { Input, Button, CheckBox, Card, Switch, Divider, Badge } from 'react-native-elements'



import { AntDesign } from '@expo/vector-icons';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faTimesCircle, faUser, faBell} from "@fortawesome/free-solid-svg-icons"


import { Image } from "react-native-elements";


import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
import { connect } from "react-redux";




function Itinerary2Screen(props) {

const [villeDepart, setVilleDepart] = useState('');
const [villeRetour, setVilleRetour] = useState('');
const [tripName, setTripName] = useState(props.voyagesList.tripName);
const [etapesList, setEtapesList] = useState([]);
const [modalUserVisible, setModalUserVisible] = useState(false);
const [modalBellVisible, setModalBellVisible] = useState(false);
const [check, setCheck] = useState(false)
const [check2, setCheck2] = useState(false)
const [isEnabled, setIsEnabled] = useState(false);



// AFFICHAGE INFOS VOYAGE //
const voyageDataFromBack = async() => {
 // console.log('voyageDataFromBack déclenchée')
  var rawresponse = await fetch('https://tripbook-lacapsule.herokuapp.com/itinerary', {
   method: 'POST',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: `voyageId=${props.voyageID}`
  })
  var response = await rawresponse.json();
 // console.log('response route itinerary', response)
  setTripName(response.trip.tripName)
  setEtapesList(response.trip.etapes)
  setVilleDepart(response.trip.villeDepart)
  setVilleRetour(response.trip.villeRetour)
  props.marqueursListReducer(response.villesMarked)
  props.villesDetAReducer(response.tableauCoord)
  
  }

  useEffect(() => {
    
      voyageDataFromBack();
       if (villeRetour != ''){
        toggleSwitch()
        setVilleRetour(villeDepart)
      } 
    //  console.log(props.voyageID)
      
  }, [])

  //console.log('itinerary props ville a et d', props.villesDetA)
  
// ADD VILLE DEPART //

const addVilleDepart = async() => {
  setCheck(false)
  var rawresponse = await fetch('https://tripbook-lacapsule.herokuapp.com/addvilledepart', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `voyageId=${props.voyageID}&villeDepartFromFront=${villeDepart}`
  })
  var response = await rawresponse.json();
//  console.log('reponse route add ville depart : ', response)
  voyageDataFromBack()
  
}

// ADD VILLE RETOUR //
const addVilleRetour = async() => {
  setCheck2(false)
  var rawresponse = await fetch('https://tripbook-lacapsule.herokuapp.com/addvilleretour', {
  method: 'POST',
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  body: `voyageId=${props.voyageID}&villeRetourFromFront=${villeRetour}`
  })
  var response = await rawresponse.json();
 // console.log('reponse route add ville retour :', response)
  voyageDataFromBack()
  
}


// SWITCH //
 
  var inputVilleRetour = (
    <View style={styles.input} >
    <TextInput 
      style={styles.paragraphe} 
      placeholder="Ville de retour"
      onChangeText={(value) => {setVilleRetour(value), setIsValidated(false)}}
      value={villeRetour}
      onFocus={() => setCheck2(true)}
      />
      {check2 === true ? <Button title={'Valider'} buttonStyle={{backgroundColor: '#131256'}} titleStyle={{fontFamily: 'Poppins_300Light'}} onPress={() => addVilleRetour()}/> : null}
      </View>
  )

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    }
  
///

  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light
  });

// NOMBRE JOURS //
const [jour, setJour] = useState(0)

  if (jour < 0) {
    setJour(0)
  }
  //

// AJOUTER NOUVELLE ETAPE //
const [etapeVille, setEtapeVille] = useState('');

const addEtape = async() => {
  console.log('click detecté')
  var rawresponse = await fetch('https://tripbook-lacapsule.herokuapp.com/addetape', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `voyageId=${props.voyageID}&villeEtapeFromFront=${etapeVille}&dureeFromFront=${jour}`
   })
   var response = await rawresponse.json();
 //  console.log(response)
   setEtapesList(response.tripEtapes)
   voyageDataFromBack()
   setEtapeVille('')
   setJour(0)
   }
  
// SUPPRIMER ETAPE //
const handleDeleteEtape = async(etapeID) => {
  //console.log('click détecté', etapeID, props.voyageID)
  var rawresponse = await fetch('https://tripbook-lacapsule.herokuapp.com/deleteetape', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `etapeIDFromFront=${etapeID}&voyageID=${props.voyageID}`
  }) 
  var response = await rawresponse.json();
 // console.log('response', response)
  //console.log('response delete etape ////', response.allTrips.etapes)
  setEtapesList(response.allEtapes)
  voyageDataFromBack()
}

// AJOUTER une ville en base de donnée avec ses coordonnées //
const [isValidated, setIsValidated] = useState(false)

  return (
    <View style={styles.container}>
       
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%'}}>
        <Image
          style={styles.bigLogo}
          source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
          onPress={() => props.navigation.navigate('HomeScreen')}
        />
        <View style={{flexDirection: 'row'}}>
          <Button 
            icon={<FontAwesomeIcon icon={faUser} style={styles.icon} size={25} />}
            type={"clear"}
            onPress={() => setModalUserVisible(true) }
          />
            
          <Button
            icon={<FontAwesomeIcon icon={faBell} style={styles.icon} size={25} />}
            type={"clear"}
            onPress={() => setModalBellVisible(true)}
          />
        </View>
      </View>
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
                onPress={() => props.navigation.navigate('FirstScreen')}
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput style={styles.text} value={tripName}/>
        
      </View>
      <ScrollView>
        <View style={styles.input}>
          <TextInput 
            style={styles.paragraphe}
            placeholder="Ville de départ"
            onChangeText={(value) => {setVilleDepart(value), setIsValidated(false)}}
            defaultValue={villeDepart}
            onFocus={() => setCheck(true)}
          ></TextInput>
      {check === true ? <Button title={'Valider'} buttonStyle={{backgroundColor: '#131256'}} titleStyle={{fontFamily: 'Poppins_300Light'}} onPress={() => addVilleDepart()}/> : null}
            </View>
              <View style={styles.viewSwitch}>
                <Switch 
                  value={isEnabled} 
                  color='#131256'
                  onValueChange={toggleSwitch}
                /> 
                <Text style={styles.paragraphe}>Ville de départ différente de la ville de retour</Text>
              </View>

      {isEnabled === true ? inputVilleRetour : null}
            <Text style={styles.text}>Etapes</Text>
      {etapesList.map((etape, i) => (
            <View backgroundColor="rgba(255,184,31,0.09)" style={styles.ville} key={i}>
              <FontAwesomeIcon icon={faTimesCircle} style={styles.icon} size={25} onPress={() => handleDeleteEtape(etape._id)}/>
              <Text style={styles.paragraphe} placeholder="Ville d'étape" >{etape.ville}</Text>
              <View style={{flexDirection: 'row'}}>
                <AntDesign 
                  name="minuscircle" 
                  size={30} 
                  color="rgba(255,184,31,0)" 
                  style={styles.iconPlus}
                  onPress={() =>  {etape.duree -1}}
                />
                <Text style={styles.paragraphe}>{etape.duree} jour(s)</Text>
                <AntDesign 
                  name="pluscircle" 
                  size={30} 
                  color="rgba(255,184,31,0)" 
                  style={styles.iconPlus}
                  onPress={() => {etape.duree +1}}
                />
              </View>
            </View>
))}
<View backgroundColor="rgba(255,184,31,0.09)" style={styles.ville} >
  <TextInput style={styles.paragraphe} placeholder="Ville d'étape" value={etapeVille} onChangeText={(value) => setEtapeVille(value)}/>
  <View style={{flexDirection: 'row'}}>
  <AntDesign 
                    name="minuscircle" 
                    size={30} 
                    color="rgba(255,184,31,1)" 
                    style={styles.iconPlus}
                    onPress={() =>  setJour(jour -1)}
                  />
  <Text style={styles.paragraphe}>{jour} jour(s)</Text>
  <AntDesign 
                    name="pluscircle" 
                    size={30} 
                    color="rgba(255,184,31,1)" 
                    style={styles.iconPlus}
                    onPress={() => setJour(jour +1)}
                  />
  </View>
  </View>

        <View style={styles.viewAjouterEtape}>
          <AntDesign 
            name="pluscircle" 
            size={40} 
            color="#131256"
            onPress={() => addEtape()}
          />
          <Text style={styles.textAjouterEtape}>Ajouter une étape au voyage</Text>
        </View> 
            
        <Button
          title="Inviter mes covoyageurs"
          titleStyle={styles.textbutton}
          buttonStyle={styles.sendbutton}
          onPress={() => props.navigation.navigate("InvitationScreen")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: 'white', 
  },
  bigLogo: {
    marginLeft: 20,
    width: 79,
    height: 50,
    resizeMode: 'cover'
  },
  scrolling: {
    flex:1, 
    marginLeft:10, 
    marginRight:10
  },
  inputStyle : {
    borderBottomColor:'orange', 
    marginTop:5, 
    marginBottom:0, 
    marginLeft:10, 
    paddingLeft:10
    },
  inputStyleContainer : {
    borderBottomWidth:0
  },
  viewSwitch : {
    flexDirection:'row', 
    marginBottom:15, 
    marginTop:5,
    justifyContent: 'center'
  },
 
  iconPlus : {
    margin:10, 
  },
  icon: {
    color:"#131256",
    alignSelf: 'center',
  },
 

  viewAjouterEtape : {
    backgroundColor:'white', 
    alignItems:'center', 
    marginTop:20,
    marginBottom: 20,
  },
  textAjouterEtape : {
    color:'#131256', 
    fontSize:20, 
    fontFamily: 'Poppins_300Light',
    marginTop: 10,
  },

  buttonValider : {
    backgroundColor: '#FFB81F',height:50, borderRadius:10
  },
  validerStyle : {
    marginBottom:40, marginLeft:15, marginRight:15
  },
   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 25,
    justifyContent: "center",
    color: '#131256',
    marginTop : 25,
    marginBottom : 20,
    textAlign: 'center',
  },
  textPetit: {
    fontFamily: 'Poppins_300Light',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: "center",
    color: 'white',
    marginTop: 30
  },
  textPetit2: {
    fontFamily: 'Poppins_300Light',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: "center",
    color: 'white',
    marginBottom: 30
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346,
    alignSelf: 'center'
  },
  input: {
    justifyContent: "space-between",
    backgroundColor: "rgba(255,184,31,0.15)",
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#FFB81F",
    borderBottomWidth: 2,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
iconCrayon: {
  alignSelf: 'center',
  color: "#131256",
  marginLeft: 10

},
paragraphe: {
  fontFamily: "Poppins_300Light",
  fontSize: 15,
  color: "#131256",
  alignSelf: 'center',
},
ville: {
  flexDirection: 'row', 
  justifyContent: 'space-between',
  backgroundColor: 'rgba(255,184,31,0.15)',
  marginTop: 15,
  marginBottom: 3,
  padding: 10,
  borderRadius: 20,
},
iconView: {
  flexDirection: "row",
  marginTop:20,
  justifyContent: 'space-between'
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

function mapStateToProps(state){
  return { voyageID: state.voyageID,
    voyagesList : state.voyagesList,
    villesDetA: state.villesDetA
  }
}

function mapDispatchToProps(dispatch){
  return {
    voyagesListReducer: function(voyagesList) {
      dispatch({type: 'voyagesList', voyagesList: voyagesList})
    },
    marqueursListReducer: function(marqueursList){
      dispatch({type: 'marqueursList', marqueursList: marqueursList})
    },
    villesDetAReducer: function(villesDetA){
      dispatch({type: 'villesDetA', villesDetA: villesDetA})
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary2Screen);