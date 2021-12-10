import React, {useState} from "react";

import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, ScrollView , Platform} from "react-native";
import { Input, Button, CheckBox, Card, Switch, Divider, Badge } from 'react-native-elements'


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';



function Itinerary2Screen(props) {
  // SWITCH //
  const [isEnabled, setIsEnabled] = useState(false);
  const [showVilleRetour, setShowVilleRetour] = useState();

  var inputVilleRetour = (
    <TextInput 
      style={styles.input} 
      placeholder="Ville de retour"
      onChangeText={(value) => setVilleRetour(value)}
      value={villeRetour}
      />
  )

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if(isEnabled === false){
      setShowVilleRetour(inputVilleRetour)
    } else {
      setShowVilleRetour()
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
const [etapeVille, setEtapeVille] = useState('');
const [villeDepart, setVilleDepart] = useState('');
const [villeRetour, setVilleRetour] = useState('');

var etapesList = [
  {
    ville: 'Rouen',
    jours: 3,
  },
  {
    ville: 'Bordeaux',
    jours: 2,
  },
  {
    ville: 'Paris',
    jours: 1,
  },
];

const addEtape = () => {
  
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
    <ScrollView>
  
                <TextInput 
                  style={styles.input} 
                  placeholder="Ville départ"
                  onChangeText={(value) => setVilleDepart(value)}
                  value={villeDepart}
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
  <Icon.Button backgroundColor="rgba(255,184,31,0.09)" style={{justifyContent: 'space-between', marginBottom:10}} key={i}>
  <TextInput style={styles.paragraphe} placeholder="Ville d'étape" value={etapeVille} onChangeText={(value) => setEtapeVille(value)}/>
  <View style={{flexDirection: 'row'}}>
  <AntDesign 
                    name="minuscircle" 
                    size={30} 
                    color="rgba(255,184,31,1)" 
                    style={styles.iconPlus}
                    onPress={() =>  {etape.jours -1}}
                  />
  <Text style={styles.paragraphe}>{etape.jours} jour(s)</Text>
  <AntDesign 
                    name="pluscircle" 
                    size={30} 
                    color="rgba(255,184,31,1)" 
                    style={styles.iconPlus}
                    onPress={() => + 1}
                  />
  </View>
  </Icon.Button>
))}



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
    title="J'invite mes covoyageurs"
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
  fontSize: 15,
  color: "#131256",
  alignSelf: 'center',
},

});

export default Itinerary2Screen;