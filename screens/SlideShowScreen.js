import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';

// import Slideshow from 'react-native-slideshow';



function SlideShowScreen() {
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
    
     <View style={{flexDirection: 'row'}}>
     <ScrollView
        horizontal={true}
        indicatorStyle={"white"}
        >
        <Image style={styles.slideshow1} source={{ url:'https://images.unsplash.com/photo-1549937917-03ccda498729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'}} />
        <Image style={styles.slideshow} source={{ url:'https://images.unsplash.com/photo-1606385199623-1e72da6e60ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dm95YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
        <Image style={styles.slideshow} source={{ url:'https://images.unsplash.com/photo-1567009694991-c26bee6f79ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' }} />
        </ScrollView>
     </View>
    

    {/* <Slideshow 
      dataSource={[
        { url:'http://placeimg.com/640/480/any' },
        { url:'http://placeimg.com/640/480/any' },
        { url:'http://placeimg.com/640/480/any' }
    ]}/> */}

      <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('TripCreationScreen')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: '#131256'
  },
  bigLogo: {
    width: 100,
    height: 92,
    justifyContent: 'flex-start',
    marginBottom: 30
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
    marginBottom: 50,
  },
  slideshow1: {
    width: 200,
      height: 400,
      resizeMode: 'cover',
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 30,
      borderRadius: 30,
  },
  slideshow: {
      width: 200,
      height: 400,
      resizeMode: 'cover',
      marginRight: 50,
      marginBottom: 30,
      borderRadius: 30,
  }
});

export default SlideShowScreen;
