import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import { StyleSheet, View, Text, Modal, Pressable, TouchableOpacity, TextInput} from "react-native";

import { Image, Button, Overlay } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell, faPlus, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

import {Agenda, LocaleConfig} from 'react-native-calendars';
import DateTimePicker from "@react-native-community/datetimepicker";

import Calendar from "react-native-calendar-range-picker";
import Icon from "react-native-vector-icons/FontAwesome";


LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


function PlanningScreen(props) {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });
  
  const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalBellVisible, setModalBellVisible] = useState(false);
  const [modalPlusVisible, setModalPlusVisible] = useState(false);

  // GET ACTIVITIES //
  const [activitiesList, setActivitiesList] = useState([])

  useEffect(() => {
    async function activitiesFromBack() {
      var rawresponse = await fetch('https://tripbook-lacapsule.herokuapp.com/activities', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `voyageId=${props.voyageID}`
      })
      var response = await rawresponse.json();
      console.log('reponse back activities', response)
      setActivitiesList(response.tripActivities)
    }
    activitiesFromBack();
  }, [])

  

  var markedDates = activitiesList.map((activity, i) => (
    `${activity.date}:{marked: true},`
    )
  )


  console.log('marked Dates', markedDates)

  // ACTIVITY NAME //

  const [activityName, setActivityName] = useState('')

  // DATE PICKER //

  //Ajd
  var today = new Date();
  var jour = today.getDate()
  var mois = 0
  if (today.getMonth() === 11) {
    mois = 12
  } else {
    mois = today.getMonth() + 1;
  }
  var annee = today.getFullYear();
  const fullDay = `${annee}-${mois}-${jour}`

  //Save Date Limite
  const [date, setDate] = useState(fullDay);

  const [limitDate, setLimitDate] = useState('');
  const [visible, setVisible] = useState(false);

  const savingDate = (date) => {
    console.log(date)
    setLimitDate(date)
  }
 

  const toggleOverlay = () => {
    setVisible(!visible);
};
  
// TIME PICKER //
  const [time, setTime] = useState(today)
  const [heureCalendrier, setHeureCalendrier] = useState('')

  const savingTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
    var timeHour = selectedTime.getHours()
    var timeMinute = selectedTime.getMinutes()

    // Modification format minute //
    if(timeMinute < 10){
      timeMinute = '0'+selectedTime.getMinutes()
    } else {
      timeMinute = selectedTime.getMinutes()
    }
    //
    setHeureCalendrier(`${timeHour}:${timeMinute}`)
  };
 
// ADD ACTIVITE BACK END //
const newActivity = async() => {
  setModalPlusVisible(false)
  const rawreponse = await fetch('https://tripbook-lacapsule.herokuapp.com/addactivity', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `voyageID=${props.voyageID}&activityName=${activityName}&token=${props.token}&date=${limitDate}&heure=${heureCalendrier}`
  })
  const response = rawreponse.json();
  console.log('reponse add activity', response.tripActivities)

}

  return (

    <View>

    

    <View position="relative" height= "100%" style={{justifyContent: "flex-end", flexDirection: "column-reverse", paddingTop: "38%"}}>
    <Agenda
    theme={{
      backgroundColor:"rgba(255,184,31,0.09)", 
      calendarBackground:"white",
      monthTextColor:"#131256",
      textDayFontFamily: 'Poppins_300Light',
      textMonthFontFamily: 'Poppins_300Light',
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

    /* markedDates={{
    '2021-12-10': {marked: true},
    '2021-12-23': {marked: true},
    '2021-12-24': {marked: true},
    '2021-12-25': {marked: true},
    }} */

    items={{
    '2021-12-10': [{name: 'item 1 - any js object'}],
    '2021-12-23': [{name: 'item 2 - any js object', height: 80, time: '14h00'}],
    '2021-12-24': [{}],
    '2021-12-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}],
    '2021-11-30': [{}]
    }}
    renderItem={(item)=> {return (
      <View style={[styles.item]}>
      <TouchableOpacity style={{ marginTop: 30}}>
          <Text style={{color: 'orange'}}>{item.time}</Text>
          <Text style={{paddingLeft: 15, marginTop: 10}}>{item.name}</Text>
      </TouchableOpacity>
  </View>
    )}} 
  /* renderDay={(day, item) => {return (<View style={[styles.item]}>
    <TouchableOpacity style={{ marginTop: 30}}>
        <Text style={{color: 'orange'}}>{item.time}</Text>
        <Text style={{paddingLeft: 15, marginTop: 10}}>{item.name}</Text>
    </TouchableOpacity>
</View>);}} */
  />

<TouchableOpacity
style={{
  borderWidth: 2,
  borderColor: 'white',
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
</TouchableOpacity>

<Modal
transparent={true}
visible={modalPlusVisible}
>
  <View style={{backgroundColor:"#131256aa", flex:1}}>
    <View style={{backgroundColor:"white", margin:50, padding:40, borderRadius:10}}>
      <View style={{alignItems: 'flex-end'}}>
      <Button type={"clear"} icon={<FontAwesomeIcon icon={faTimesCircle} style={{color:"#131256",}} size={25}/>} onPress={() => setModalPlusVisible(false)}/> 
      </View>
    
    <Text style={styles.textTitre}>Activité :</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom de l'activité"
            onChangeText={(value) => setActivityName(value)}
          />
          <Text style={styles.textTitre}>Date :</Text>
          <Icon.Button
        name="calendar"
        backgroundColor="rgba(255,184,31,0.09)"
        iconStyle={styles.icon}
        onPress={toggleOverlay}
      >
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle = {{width : "90%", height : "70%"}}>
            <Calendar
                disabledBeforeToday	= "true"
                startDate={date}
                singleSelectMode
                onChange={(date) => savingDate(date)}                
                style={{ 
                    container: {backgroundColor:'rgba(255,184,31,1)'},
                    monthContainer: {},
                    weekContainer:{},
                    monthNameText: {},
                    dayNameText: {},
                    dayText: {},
                    dayTextColor: '#131256',
                    holidayColor: 'rgba(100,100,254,0.30)',
                    todayColor: 'rgba(255,184,31,1)',
                    disabledTextColor: 'black',
                    selectedDayTextColor: 'rgba(255,184,31,1)',
                    selectedDayBackgroundColor: '#131256',
                    selectedBetweenDayTextColor: 'rgba(255,184,31,1)',
                    selectedBetweenDayBackgroundTextColor: '#131256',
                }}
            />
            <Button title ="Valider"
                titleStyle={{fontFamily: 'Poppins_700Bold'}}
                buttonStyle={{backgroundColor: '#FFB81F',height:"40%", width: "100%", borderRadius:10, marginTop:"10%"}}
                onPress={toggleOverlay}   
            />
        </Overlay>
      <Text style={styles.textCalendar}> {limitDate}</Text>

      </Icon.Button>
          <Text style={styles.textTitre}>Heure :</Text>
         <View style={{paddingRight: 82}}> 
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={savingTime}
        />
        </View>
      
      <Button
      buttonStyle={styles.smallPressable}
      titleStyle={{fontFamily: 'Poppins_700Bold'}}
      onPress={() => newActivity()}
      title='Valider'
      />
      
      </View>
      </View>
      </Modal>




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
alignSelf: 'center',
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
width: 100,
height:40,
backgroundColor: "#FFB81F",
marginTop: 10,
justifyContent: 'center',
borderRadius: 8,
color: "rgba(255,184,31,0.15)",
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
  justifyContent: "space-between",
  backgroundColor: "rgba(255,184,31,0.15)",
  height: 60,
  paddingLeft: 10,
  paddingRight: 10,
  borderBottomColor: "#FFB81F",
  borderBottomWidth: 2,
  marginBottom: 10,
  marginTop: 5,
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: "Poppins_300Light",
  fontSize: 16,
  color: "#131256",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
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
  marginTop: 10,
},
textCalendar: {
  fontFamily: "Poppins_300Light",
  fontSize: 16,
  color: "#131256",
  textAlign: 'center'
},
})

function mapStateToProps(state){
  return { voyageID: state.voyageID,
    token : state.token
  }
}

export default connect (mapStateToProps, null)(PlanningScreen);