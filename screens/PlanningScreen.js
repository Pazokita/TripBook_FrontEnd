import React, {useState} from "react";
import { StyleSheet, View, Text, Modal, Pressable, TouchableOpacity, TextInput} from "react-native";

import { Image, Button, Input} from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell, faPlus} from "@fortawesome/free-solid-svg-icons";

import {Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import DateTimePicker from "@react-native-community/datetimepicker";


LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


function PlanningScreen() {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });
  
  const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalBellVisible, setModalBellVisible] = useState(false);
  const [modalPlusVisible, setModalPlusVisible] = useState(false);





  return (

    <View>

    

    <View position="relative" height= "100%" style={{justifyContent: "flex-end", flexDirection: "column-reverse", paddingTop: "38%"}}>
    <Agenda
    theme={{
      backgroundColor:"rgba(255,184,31,0.09)", 
      calendarBackground:"white",
      monthTextColor:"#131256",
      textDayFontFamily: '"Poppins_300Light"',
      textMonthFontFamily: '"Poppins_300Light"',
      selectedDayBackgroundColor: '#131256',
      dotColor:'#FFB81F',
      selectedDotColor:'#FFB81F',
      agendaKnobColor: '#131256',
      agendaDayTextColor: '#131256',
      agendaTodayColor: '#FFB81F',
      agendaDayNumColor: '#FFB81F',
      todayTextColor: '#FFB81F',
      textSectionTitleColor: '#979797',
      }}
    markedDates={{
    '2021-12-10': {marked: true},
    '2021-12-22': {marked: true},
    '2012-05-18': {disabled: true}
    }}
    items={{
    '2021-12-10': [{name: 'item 1 - any js object'}],
    '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
    '2012-05-24': [],
    '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
    }}
    renderItem={(item)=> (<View style={[styles.item]}>
      <TouchableOpacity style={{ marginTop: 30}}>
          <Text style={{color: 'orange'}}>10:00</Text>
          <Text style={{paddingLeft: 15, marginTop: 10}}>{item.name}</Text>
      </TouchableOpacity>
  </View>)}
  />

<TouchableOpacity
style={{
  borderWidth: 2,
  borderColor: '#FFB81F',
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  position: 'absolute',
  bottom: 10,
  right: 10,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 100,
}}
>
<Button
            icon={<FontAwesomeIcon icon={faPlus} style={styles.icon} size={25} />}
            type={"clear"}
            onPress={() => setModalPlusVisible(true)}
          />
<Modal
transparent={true}
visible={modalPlusVisible}
>
  <View style={{backgroundColor:"#131256aa", flex:1}}>
    <View style={{backgroundColor:"#FFB81Faa", margin:50, padding:40, borderRadius:10}}>
    <Text style={styles.textTitre}>Titre :</Text>
          <TextInput
            style={styles.input}
          ></TextInput>
          <Text style={styles.textTitre}>Date :</Text>
          <TextInput
            multiline={true}
            style={styles.input}
          ></TextInput>
          <Text style={styles.textTitre}>Heure :</Text>
          <TextInput
            style={styles.input}
          ></TextInput>
      <Pressable
      style={styles.smallPressable}
      onPress={() => setModalPlusVisible(false)}
      >
        <Text style={styles.textbutton}>Fermer</Text>
      </Pressable>
      </View>
      </View>
      </Modal>


</TouchableOpacity>

</View>

<View style={styles.top}>
                  <Image
                      style={styles.Logo}
                      source={require("../assets/Logo_Bleu_Trip_Book_No_Planet.png")}
                      onPress={() => props.navigation.navigate('HomeScreen')} />
                  <View>
                  <Text style={styles.topText}>Planning</Text>
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
marginLeft: 50,
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
marginLeft: 50,
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

input: {
  fontFamily: "Poppins_300Light",
  fontSize: 14,
  color: "#131256",
  backgroundColor: "#979797aa",
  borderWidth: 1,
  borderRadius: 0.5,
  padding: 5,
},

textTask: {
  fontFamily: "Poppins_300Light",
  fontSize: 14,
  color: "#131256",
},

textTitre: {
  fontFamily: "Poppins_700Bold",
  fontSize: 18,
  color: "#131256",
},
})

export default PlanningScreen;