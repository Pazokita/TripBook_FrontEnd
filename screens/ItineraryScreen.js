import React, {useState} from "react";

import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, ScrollView , Platform} from "react-native";
import { Input, Button, CheckBox, Card, Switch, Divider, Badge } from 'react-native-elements'


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';



function ItineraryScreen(props) {
  // SWITCH //
  const [isEnabled, setIsEnabled] = useState(false);
  const [showVilleRetour, setShowVilleRetour] = useState('');

  var inputVilleRetour = (
    <TextInput 
      style={styles.input} 
      placeholder="Ville de retour"
      />
  )

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if(isEnabled === false){
      setShowVilleRetour(inputVilleRetour)
    } else {
      setShowVilleRetour('')
    }
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
const [etapesList, setEtapesList] = useState([])

var etapeCode = (
  <Icon.Button backgroundColor="rgba(255,184,31,0.09)">
        <TextInput style={styles.paragraphe} placeholder="Ville d'étape"/>
        <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setJour(jour - 1)}
                        />
        <Text style={styles.paragraphe}>{jour} jour(s)</Text>
        <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setJour(jour + 1)}
                        />
      </Icon.Button>
)


const nouvelleEtape = (etape) => {
  var etape = etapeCode
  setEtapesList(...etapesList + etape)
}

//

  return (
    <View style={styles.container}>
        
          <Image
              style={styles.bigLogo}
              source={require('../assets/Logo_Bleu_Trip_Book.png')}
              alignItems= "center"
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TextInput style={styles.text} value='Voyage au Japon'/>
            <MaterialCommunityIcons 
              name="pencil" 
              size={24} 
              style={styles.iconCrayon}
            />
          </View>
        
        <ScrollView style={styles.scrolling}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex : 1, backgroundColor:'white'}}>
                      <TextInput 
                        style={styles.input} 
                        placeholder="Ville départ"
                      />
                      
                      <View style={styles.viewSwitch}>
                        <Switch 
                          value={isEnabled} 
                          color='#131256'
                          onValueChange={toggleSwitch}
                        /> 
                        <Text style={styles.paragraphe}>Ville de départ différente de la ville de retour</Text>
                      </View>

                      {showVilleRetour}

      <Text style={styles.text}>Etapes</Text>
      {etapesList.map((etape, i) => (
        <Icon.Button backgroundColor="rgba(255,184,31,0.09)" key={i}>
        <TextInput style={styles.paragraphe} placeholder="Ville d'étape"/>
        <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setJour(jour - 1)}
                        />
        <Text style={styles.paragraphe}>{jour} jour(s)</Text>
        <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                          onPress={() => setJour(jour + 1)}
                        />
      </Icon.Button>
      ))}
      
    
      
             

            
              <View style={styles.viewAjouterEtape}>
                <AntDesign 
                  name="pluscircle" 
                  size={40} 
                  color="#131256"
                  onPress={() => nouvelleEtape()}
                />
                <Text style={styles.textAjouterEtape}>Ajouter une étape au voyage</Text>
              </View> 
              
            
            <Button
          title="J'invite mes covoyageurs"
          titleStyle={styles.textbutton}
          buttonStyle={styles.sendbutton}
          onPress={() => props.navigation.navigate("InvitationScreen")}
        />
        </KeyboardAvoidingView>
        </ScrollView>
       
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    backgroundColor: 'white'
  },
  header : {
    marginTop: 0, 
    justifyContent:'center', 
    alignItems:"center"
  },
  bigLogo: {
    width: 100,
    height: 92,
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  scrolling: {
    flex:1, 
    marginTop: 0, 
    marginLeft:10, 
    marginRight:10
  },
  cardDepart : {
    backgroundColor:"rgba(255,184,31,0.09)", 
    padding:0, 
    borderRadius:10, 
    borderColor:"white", 
    borderWidth:0
  },
  cardDepartWrapper : {
    color:"#131256"
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
  cardDividerStyle: {
    height:0, borderBottomWidth:3
  },

  viewSwitch : {
    display:'flex', 
    flexDirection:'row', 
    marginBottom:15, 
    marginLeft:10, 
    marginTop:5,
    justifyContent: 'space-around'
  },
  
  textDepartDiffArrivee : {
    color:'#131256', 
    fontSize:15, 
    marginLeft:50, 
    marginRight:20
  },

  cards : {
    backgroundColor:"rgba(255,184,31,0.09)", 
    padding:0, 
    borderColor:"white", 
    borderBottomColor:"rgba(255,184,31,1)",
    borderRadius:10,borderBottomLeftRadius:0, borderBottomRightRadius:0, 
    borderBottomWidth:3,borderLeftWidth:0, borderRightWidth:0, borderTopWidth:0
  },
  viewCards : {
    flex:1, 
    display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center'
  },
  inputCards : {
    width:"60%",
    borderBottomColor:'orange',
    borderTopRightRadius:10, 
    marginTop:5, marginBottom:0, marginLeft:10, paddingLeft:5
  },
  inputCardsContainer : {
    borderBottomWidth:0
  },
  iconMinus : {
    marginBottom:10, marginTop:10, marginRight: 30
  },
  iconPlus : {
    margin:10, 
  },
  viewTimeSpend : {
    flex:1, display:"flex", flexDirection:'column', alignItems:'center',
    marginRight:25, marginLeft:25
  },
  textTime : {
    width:30, justifyContent:'center'
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

  inputRetour : {
    width:'10%', borderBottomColor:'orange', marginTop:5, marginBottom:0, paddingLeft:5
  },
  inputRetourContainer : {borderBottomWidth:0},

  buttonValider : {
    backgroundColor: '#FFB81F',height:50, borderRadius:10
  },
  validerStyle : {
    marginBottom:40, marginLeft:15, marginRight:15
  },
   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 30,
    justifyContent: "center",
    color: '#131256',
    marginTop : 15,
    marginBottom : 10,
    textAlign: 'center',
  },
  textSur: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    justifyContent: "center",
    color: 'white',
    marginBottom: 0
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
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
    borderBottomColor: "#FFB81F",
    borderBottomWidth: 2,
    marginBottom: 10,
  },
iconCrayon: {
  alignSelf: 'center',
  color: "#131256",
  marginLeft: 10

},
paragraphe: {
  fontFamily: "Poppins_300Light",
  fontSize: 18,
  justifyContent: "center",
  color: "#131256",
},

});

export default ItineraryScreen;

