import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, TextInput} from "react-native";

import { Image, Button } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';


import { connect } from "react-redux";


function SignInScreen(props) {
    useFonts({
        PlayfairDisplay_900Black,
        Poppins_700Bold,
        Poppins_300Light
    
      });

  const [signInEmail, setSignInEmail] = useState(''); 
  const [signInPassword, setSignInPassword] = useState(''); 

  const [userExists, setUserExists]= useState(false);

  const [listErrorsSignin, setErrorsSignin] = useState([])

  


  var handleSubmitSignIn = async () => {
    const response = await fetch('https://tripbook-lacapsule.herokuapp.com/sign-in', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    });
    
    const rawresponse = await response.json()
    console.log(rawresponse)
    
    if(rawresponse.result === true){
      setUserExists(true)
      props.addToken(rawresponse.token)
    }  else {
      setErrorsSignin(rawresponse.error)
    }
  }


  if (userExists) {
    props.navigation.navigate('HomeScreen')
  } else {
    props.navigation.navigate('SignInScreen')
  }

  var tabErrorsSignIn = listErrorsSignin.map((error,i) => {
    return(<Text style={styles.textWarning} key={i}>{error}</Text>)
  })


  return (
    <View style={styles.container}>
      <Image 
      style={styles.mediumLogo}
      source={require('../assets/Logo_Bleu_Trip_Book.png')}/>
      <Text style={styles.subTitle}>Se connecter</Text>
      
      <View>
       
          <TextInput onChangeText={(val)=> setSignInEmail(val)} placeholder="Email" style={styles.input} autoCapitalize="none"/>
        
          <TextInput onChangeText={(val)=> setSignInPassword(val)} placeholder="Mot de passe"style={styles.input} secureTextEntry={true} autoCapitalize="none"/>
      </View>
      
      {tabErrorsSignIn}
      <Button
        title="Valider"
        titleStyle={styles.textbutton}
        buttonStyle={styles.sendbutton}
        onPress={() =>
        handleSubmitSignIn()
        }
      />
      <Text style= {styles. smallText}>mot de passe oubli?? ?</Text>
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
  bigLogo: {
    width: 257,
    height: 236,
  },
  
  mediumLogo: {
    width:107,
    height:92,
    marginBottom: 20
  },

  subTitle: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 50,
    justifyContent: "center",
    color: '#131256'
  },

   text: {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 48,
    marginBottom: 10,
    justifyContent: "center",
    color: 'white'
  },
  textWarning : {
    fontFamily: "PlayfairDisplay_900Black",
    fontSize: 20,
    marginBottom: 10,
    justifyContent: "center",
    color: 'red',
    marginTop : 15
  },

  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 

  text: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    color: "#131256",
  },

  smallText: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#131256",
    marginTop: 30
  },

  inputView: {
   borderRadius: 20,
   backgroundColor: "rgba(255,184,31,0.15)",
   opacity: 50,
   width: 348,
   justifyContent: 'center'
  },

  sendbutton: {
    width: 347,
    height:56,
    backgroundColor: "#FFB81F",
    marginTop: 40,
  },

  input: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    justifyContent: "center",
    color: "#131256",
    backgroundColor: "rgba(255,184,31,0.15)",
    padding: 10,
    borderBottomColor: "#FFB81F",
    borderBottomWidth: 2,
    marginBottom: 10,
    width: 347
  },
});

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignInScreen)
