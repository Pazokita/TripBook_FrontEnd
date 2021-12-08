import React, {useState} from "react";
import { StyleSheet, View, Text, Modal} from "react-native";

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
          transparent={false}
          visible={modalUserVisible}
          >
            <View style={{backgroundColor:"#131256aa", flex:1}}>
              <View style={{backgroundColor:"#FFB81Faa", margin:50, padding:40, borderRadius:10}}>
                <Button 
                title="Deconnexion" 
                style={styles.sendbutton}
                onPress={() => props.navigation.navigate('FirstScreen')}
                />
                <Button 
                title="Paramètres" 
                style={styles.sendbutton}
                // onPress={() => props.navigation.navigate('FirstScreen')}
                />
                <Button
                title="Fermer"
                style={styles.smallbutton}
                onPress={() => setModalUserVisible(false)}
                />
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
                <Text>Blabla</Text>
                <Button
                title="Fermer"
                style={styles.smallbutton}
                onPress={() => setModalBellVisible(false)}
                />
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
      <View style={styles.inputView}>
      <Text style= {styles.text}>Paris<Button
        title="Voir"
        titleStyle={styles.textbutton}
        buttonStyle={styles.smallbutton}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      /></Text>
      
      </View>
      <View style={styles.inputView}>
      <Text style= {styles.text}>Tokyo<Button
        title="Voir"
        titleStyle={styles.textbutton}
        buttonStyle={styles.smallbutton}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      /></Text>
      </View>

      <View style={styles.inputView}>
      <Text style= {styles.text}>Seoul<Button
        title="Voir"
        titleStyle={styles.textbutton}
        buttonStyle={styles.smallbutton}
        onPress={() => props.navigation.navigate('InvitationScreen')}
      /></Text>
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
    marginRight: 7,
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
    textAlign:"center"
  }, 

  text: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: "#131256",
    justifyContent: "center",
    marginLeft: 10, 
    marginBottom: 10
  },

   inputView: {
    // flexDirection: "row",
    borderWidth: 1,
    borderColor: "#131256",
    borderRadius: 20,
    backgroundColor: "rgba(255,184,31,0.15)",
    opacity: 50,
    width: 348,
    height: 70,
    marginTop: 20
  },

  sendbutton: {
    width: 347,
    height:56,
    backgroundColor: "#FFB81F",
    marginTop: 20,
  },

  smallbutton: {
    
    marginLeft: 100,
    marginTop: 15,
    width: 70,
    height:40,
    backgroundColor: "#FFB81F",
    
  },
});

export default HomeScreen;