import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView, Share} from "react-native";
import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';



export default function InvitationScreen(props) {
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light
    
      });

      // Copy to Clipboard //
      const [copiedText, setCopiedText] = React.useState('');

      const copyToClipboard = () => {
        Clipboard.setString("je suis une url d'invitation");
      };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText('Lien copié !');
      }

      const copyToClipboardFinal = () => {
        copyToClipboard();
        fetchCopiedText();
       }
     //


    //  test share

      const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Rejoins tes amis pour organiser vos voyages !',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
    
  return (
    <View style={styles.container} >
      <ScrollView>
      <Image
        style={styles.bigLogo}
        source={require('../assets/Logo_Bleu_Trip_Book.png')}
      />

      <View style={{justifyContent: "center"}}>
      <Text style={styles.text}>J'invite mes co-voyageurs</Text>

     
      <Button buttonStyle={styles.sendbutton} titleStyle={styles.textbutton} onPress={onShare} title="Envoyer le lien d'invitation" />
    

      {/* <Button buttonStyle={styles.sendbutton2} titleStyle={styles.textbutton} title="Copier le lien d'invitation" onPress={copyToClipboardFinal} /> */}
      <Text style={styles.textPetit3}>{copiedText}</Text>

      {/* <View>
        <TouchableOpacity>
        <Text style={styles.textPetit2} onPress={ ()=>{ Linking.openURL('mailto')}} ><FontAwesome5 name="envelope" size={20} color="#131256" />  Envoyer le lien par mail</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.textPetit2}><FontAwesome5 name="sms" size={20} color="#131256"/>  Envoyer le lien par sms</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textPetit2}><FontAwesome5 name="whatsapp" size={20} color="#131256"/>  Envoyer le lien sur Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.textPetit2}><FontAwesome5 name="facebook-messenger" size={20} color="#131256"/>  Envoyer le lien sur Messenger</Text>
        </TouchableOpacity>
    </View> */}
    <Button
        title="Je retourne à mes voyages"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton2}
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
      </View>
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
    width: 100,
    height: 92,
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft:120,
    marginTop: 120
  },
   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    justifyContent: "center",
    color: '#131256',
    textAlign: 'center'
  },
  textPetit: {
    fontFamily: 'Poppins_300Light',
    fontSize: 18,
    textAlign: 'center',
    color: '#131256',
    marginTop: 30,
    marginBottom: 30,
    textDecorationLine: 'underline'
  },
  textPetit2: {
    fontFamily: 'Poppins_300Light',
    fontSize: 18,
    textAlign: 'left',
    color: '#131256',
    marginTop: 30,
    marginBottom: 30,
    textDecorationLine: 'underline'
  },
  textPetit3: {
    fontFamily: 'Poppins_300Light',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 347,
    marginTop: 40,
  },
  sendbutton2: {
    backgroundColor: "#979797",
    width: 347,
    marginTop: 0,
  },
  icon: {
    color: '#131256',
    paddingRight: 20,
  },
  ligne :{
    flexDirection: "row-reverse",
  }
})
