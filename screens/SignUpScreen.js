import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";

import { Image, Button, Input } from "react-native-elements";

import {useFonts, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import {Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
import { color } from "react-native-elements/dist/helpers";

import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';


function SignUpScreen(props) {
  useFonts({
      PlayfairDisplay_900Black,
      Poppins_700Bold,
      Poppins_300Light
  });


  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [userExists, setUserExists]= useState(false);

  const [listErrorsSignin, setErrorsSignin] = useState([])
  const [listErrorsSignup, setErrorsSignup] = useState([])


  var handleSubmitSignUp = async () => {
    const response = await fetch('https://tripbook-lacapsule.herokuapp.com/sign-up', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
   })
  
    const body = await response.json();
    console.log(body)

    if(body.result === true){
      setUserExists(true)
      props.addToken(body.token)
    } else {
      setErrorsSignup(body.error)
    }

  }

  if (userExists) {
    props.navigation.navigate('HomeScreen')
  } else {
    props.navigation.navigate('SignUpScreen')
  }
  
  
  var tabErrorsSignup = listErrorsSignup.map((error,i) => {
    return(<Text style={styles.textWarning} key={i}>{error}</Text>)
  })


  return (
    <View style={styles.container}>
      <Image 
      style={styles.mediumLogo}
      source={require('../assets/Logo_Bleu_Trip_Book.png')}/>
      <ScrollView style={styles.scrolling}>
        <Text style={styles.subTitle}>Inscription</Text>
        <Text style={styles.textPetit}>Je m’inscris pour inviter mes co-voyageurs</Text>
        <View>
            <TextInput onChangeText={(val)=> setSignUpUsername(val)} placeholder="Nom d'utilisateur" style= {styles.input}/>
            <TextInput onChangeText={(val)=> setSignUpEmail(val)} placeholder="Email" style= {styles.input} autoCapitalize="none"/>
            <TextInput onChangeText={(val)=> setSignUpPassword (val)} placeholder="Mot de passe" style= {styles.input} secureTextEntry={true} autoCapitalize="none"/>
        </View>
        {tabErrorsSignup}
        <Button
          title="Je créé mon compte"
          titleStyle={styles.textbutton}
          buttonStyle={styles.sendbutton}
          onPress={() => 
            handleSubmitSignUp()
          }
        />
        <Button
          title="J'ai déjà un compte"
          titleStyle={styles.textbutton}
          buttonStyle={styles.sendbutton}
          onPress={() => props.navigation.navigate('SignInScreen')}
        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    backgroundColor: 'white',
  },
  
  mediumLogo: {
    width:107,
    height:92,
    marginBottom: 30,
    marginTop: 60
  },

  subTitle: {
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
    marginBottom: 20
  },

  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
  }, 

  sendbutton: {
    width: 347,
    height:56,
    backgroundColor: "#FFB81F",
    marginTop: 20,
    marginBottom : 0
  },

  scrolling: {
    flex:1, 
    marginTop: 0, 
    marginLeft:0, 
    marginRight:0,
    marginBottom : 0,
    width : 350,
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
)(SignUpScreen)