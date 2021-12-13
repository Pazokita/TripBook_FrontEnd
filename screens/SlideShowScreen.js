import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


function SlideShowScreen(props) {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });

  return (
    <View style={styles.container}>
        <Image
          style={styles.bigLogo}
          source={require('../assets/Logo_Blanc_Trip_Book.png')}
        />


      <Text style={styles.text}>Comment ça marche ?</Text>
      <Text style={styles.textPetit} >Envie de partir en voyage entre ami.e.s ? TripBook est la solution pour s'organiser !</Text>

      <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('TripCreationScreen')}
      />
      <Button
        title="chat"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('ChatScreen')}
      />
      <ScrollView horizontal={true}
        indicatorStyle={"white"}
        style={{flexDirection: 'row'}}
        contentContainerStyle = {{width : "230%"}}
      >
        
        <Image style={styles.slideshow1} source={{ url:'https://images.unsplash.com/photo-1549937917-03ccda498729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'}} />
        <Image style={styles.slideshow} source={{ url:'https://images.unsplash.com/photo-1606385199623-1e72da6e60ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dm95YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
        <Image style={styles.slideshow} source={{ url:'https://images.unsplash.com/photo-1567009694991-c26bee6f79ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' }} />
      
      </ScrollView>


    

    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: '#131256'
  },
  bigLogo: {
    width: 100,
    height: 92,
    justifyContent: 'flex-start',
    marginBottom: 20
  },
   text: {
    fontFamily: 'PlayfairDisplay_900Black',
    fontSize: 24,
    justifyContent: "center",
    color: 'white',
    textAlign: 'center'
  },
  textPetit: {
    fontFamily: 'Poppins_300Light',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    marginBottom: 0
  },
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 
  sendbutton: {
    backgroundColor: "#FFB81F",
    width: 346,
    marginTop: 10,
    marginBottom: 0,
  },
  slideshow1: {
    marginTop : 20,
    width: 200,
    height: "90%",
    marginRight: 0,
    borderRadius: 30,
    marginLeft : "15%"
  },
  slideshow: {
    marginTop : 20,
    width: 200,
    height: "90%",
    marginRight: 60,
    borderRadius: 30,
  }
});

export default SlideShowScreen;


