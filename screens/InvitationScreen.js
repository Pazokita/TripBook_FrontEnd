import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Image, Button, Input } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
import { color } from "react-native-elements/dist/helpers";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function InvitationScreen(props) {
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light
    
      });
  return (
    <View>
      
      <Text>J'invite mes co-voyageurs</Text>
      
      
    </View>
  );
}


export default InvitationScreen;