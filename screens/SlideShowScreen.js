import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
// import { useWindowDimensions } from "react-native";


function SlideShowScreen(props) {
  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light

  });


  const [active, setActive] = useState(0);

  const images = [
    require("../assets/Screenshot1.jpg"),
    require("../assets/Screenshot2.png"),
    require("../assets/Screenshot3.jpg"),
  ]

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
        <Image
          style={styles.bigLogo}
          source={require('../assets/Logo_Blanc_Trip_Book.png')}
        />


      <Text style={styles.text}>Comment ça marche ?</Text>
      <Text style={styles.textPetit} >Envie de partir en voyage entre ami.e.s ? TripBook est la solution pour s'organiser !</Text>

      
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{width: 200, height: "90%", marginTop: 30,}}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{width: 200, height: "88%", borderRadius: 30}}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>

      <Button
        title="J'organise mon premier voyage"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() => props.navigation.navigate('SignUpScreen')}
      />


    

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
    width: 347,
    marginTop: 10,
    marginBottom: 20,
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
    flexDirection: 'row',
    position: 'absolute',
  },

  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
  },
  dot: {
    color: '#979797',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFB81F',
    fontSize: 50,
  }
});

export default SlideShowScreen;


