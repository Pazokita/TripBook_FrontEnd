import React from "react";

import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Input, Button, CheckBox, Card, Switch, Divider, Badge } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import { Image } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';



function ItineraryScreen(props) {

  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light
  });
  return (
    <View style={{flex : 1, backgroundColor:'white'}}>
        <View style={styles.header}>
          <Image
              style={styles.bigLogo}
              source={require('../assets/Logo_Bleu_Trip_Book.png')}
              alignItems= "center"
          />
          <Text style={styles.text}>
            <Text style={{marginRight:10}}>Trip Japon / 8 jours</Text>
            <MaterialCommunityIcons 
              name="pencil" 
              size={24} 
              color="black" 
              marginLeft="10"
            />
          </Text>
        </View>
        <ScrollView style={styles.scrolling}>
          <View behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex : 1, backgroundColor:'white'}}>
            <View>
              <Text style={styles.textPetit}>Ville de départ</Text>
              <View style = {{display:"flex"}}>
                  <Card name ="plus" 
                    containerStyle={styles.cardDepart} 
                    wrapperStyle={styles.cardDepartWrapper}
                  >     
                      <Input 
                        containerStyle={styles.inputStyle} 
                        inputContainerStyle={styles.inputStyleContainer} 
                        placeholder="Ville départ"
                      />
                      <Card.Divider color="rgba(255,184,31,1)" style={styles.cardDividerStyle}/>
                      <View style={styles.viewSwitch}>
                        <Switch 
                          value={true} 
                          style={styles.switchStyle} 
                          color='#131256'
                        /> 
                        <Text style={styles.textDepartDiffArrivee}>Ville de départ différente de la ville de retour</Text>
                      </View>
                  </Card>
              </View>
            </View>
            <View>
              <Text style={styles.textPetit}>Étapes</Text>
              <View style = {{display:"flex"}}>
                  <Card name ="plus" containerStyle={styles.cards} wrapperStyle={{color:"#131256"}}>     
                      <View style={styles.viewCards}>
                        <Input 
                          containerStyle={styles.inputCards} 
                          inputContainerStyle={styles.inputCardsContainer} 
                          placeholder="Ville départ"
                        />
                        <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                        />
                        <View style={styles.viewTimeSpend}>
                          <Text style={styles.textTime}>3</Text>
                          <Text style={styles.textTime}>jours</Text>
                        </View>
                        <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconMinus}
                        />
                      </View>
                  </Card>
                  <Card name ="plus" containerStyle={styles.cards} wrapperStyle={{color:"#131256"}}>     
                      <View style={styles.viewCards}>
                        <Input 
                          containerStyle={styles.inputCards} 
                          inputContainerStyle={styles.inputCardsContainer} 
                          placeholder="Ville départ"
                        />
                        <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                        />
                        <View style={styles.viewTimeSpend}>
                          <Text style={styles.textTime}>3</Text>
                          <Text style={styles.textTime}>jours</Text>
                        </View>
                        <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconMinus}
                        />
                      </View>
                  </Card>
                  <Card name ="plus" containerStyle={styles.cards} wrapperStyle={{color:"#131256"}}>     
                      <View style={styles.viewCards}>
                        <Input 
                          containerStyle={styles.inputCards} 
                          inputContainerStyle={styles.inputCardsContainer} 
                          placeholder="Ville départ"
                        />
                        <AntDesign 
                          name="pluscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconPlus}
                        />
                        <View style={styles.viewTimeSpend}>
                          <Text style={styles.textTime}>3</Text>
                          <Text style={styles.textTime}>jours</Text>
                        </View>
                        <AntDesign 
                          name="minuscircle" 
                          size={30} 
                          color="rgba(255,184,31,1)" 
                          style={styles.iconMinus}
                        />
                      </View>
                  </Card>
              </View>
              <View style={styles.viewAjouterEtape}>
                <AntDesign 
                  name="pluscircle" size={40} color="#131256" style={styles.iconAjouter}
                />
                <Text style={styles.textAjouterEtape}>Ajouter une étape</Text>
                <Text style={styles.textAjouterEtape}>au voyage</Text>
              </View> 
            </View>
            <View style = {{marginBottom:40}}>
              <Text style={styles.textPetit}>Ville de retour</Text>
              <Card name ="plus" 
                containerStyle={styles.cards} 
                wrapperStyle={{color:"#131256"}}
              >     
                <Input 
                  style={styles.inputRetour} 
                  inputContainerStyle={styles.inputRetourContainer} 
                  placeholder="Ville de retour"/>
              </Card>
            </View>
          </View>
            
        <Button title ="Valider"
          buttonStyle={styles.buttonValider}
          style = {styles.validerStyle}     
        />
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
    height: 100,
    marginTop: 30
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
    marginTop:5
  },
  switchStyle : { 
    width:10, 
    height:10, 
    transform: [{ scaleX: .8 }, { scaleY: .8 }] 
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
    marginBottom:10, marginTop:10
  },
  viewTimeSpend : {
    flex:1, display:"flex", flexDirection:'column', alignItems:'center',
    marginRight:25, marginLeft:25
  },
  textTime : {
    width:30, justifyContent:'center'
  },


  viewAjouterEtape : {
    backgroundColor:'white', alignItems:'center', marginTop:10
  },
  iconAjouter : {
    marginBottom:10, marginTop:10
  },
  textAjouterEtape : {
    color:'#131256', fontSize:20, fontWeight:'bold'
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

   shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
        width: 0,            // These can't both be 0
        height: 1,           // i.e. the shadow has to be offset in some way
    }},

   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 30,
    justifyContent: "center",
    color: '#FFB81F',
    marginTop : 15,
    marginBottom : 10
  },
  textSur: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    justifyContent: "center",
    color: 'white',
    marginBottom: 0
  },
  textPetit: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: "center",
    color: 'white',
    marginTop: 30
  },
  textPetit2: {
    fontFamily: 'PlayfairDisplay_900Black',
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
    width: 346
  },
});

export default ItineraryScreen;

