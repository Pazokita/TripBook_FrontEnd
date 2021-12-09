import React, {useState} from "react";
import { StyleSheet, View, Text, Modal, Pressable} from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";



function HomeScreen(props) {
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light
    
      });

      const [modalUserVisible, setModalUserVisible] = useState(false);
      const [modalBellVisible, setModalBellVisible] = useState(false);

     

  return (
    
    <View style={styles.container}>
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

      <Image 
      style={styles.mediumLogo}
      source={require('../assets/Logo_Bleu_Trip_Book.png')}/>

      <Text style={styles.subTitle}>Bienvenue [User]</Text>

      <Button
        title="Nouveau Voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('TripCreationScreen')}
      />


      <View style={styles.ville}>
      <Text style= {styles.text2}>Paris</Text>
      <Button
        title="Voir"
        titleStyle={styles.textbutton}
        buttonStyle={styles.smallbutton2}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      />
      </View>

      <View style={styles.ville}>
      <Text style= {styles.text2}>Seoul</Text>
      <Button
        title="Voir"
        titleStyle={styles.textbutton}
        buttonStyle={styles.smallbutton2}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      />
      </View>

      <View style={styles.ville}>
      <Text style= {styles.text2}>Tokyo</Text>
      <Button
        title="Voir"
        titleStyle={styles.textbutton}
        buttonStyle={styles.smallbutton2}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      />
      </View>

      
      <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('Nav')}
      />
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    backgroundColor: 'white'
  },

  icon: {
    color:"#131256",
  },

  iconView: {
      flexDirection: "row",
      marginLeft: 250,
  },

  
  mediumLogo: {
    width:107,
    height:92,
    marginBottom: 40,
    marginTop: 40
  },

  subTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    justifyContent: "center",
    color: '#131256'
  },

  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
    alignSelf:"center",
    
  }, 

   sendbutton: {
    width: 347,
    height:56,
    backgroundColor: "#FFB81F",
    marginTop: 20,
  },
 
  ville: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,184,31,0.15)',
    width: 348,
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,
  },
  text2 : {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: "#131256",
    justifyContent: "flex-start",
   marginLeft: 10, 
    alignSelf: 'center'
  },
  smallbutton2: {
    alignSelf: 'flex-end',
    width: 70,
    height:40,
    backgroundColor: "#FFB81F",
    
  },

  pressable:{
    // flexDirection: "row",
    width: 250,
    height:56,
    backgroundColor: "#131256",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: 'center',
    
  },

  smallPressable: {
    // flexDirection: "row",
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

});

export default HomeScreen;