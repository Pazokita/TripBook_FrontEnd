import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNav from "./component/tabNav";

import FirstScreen from './screens/FirstScreen';
import SignInScreen from './screens/SignInScreen';
import SlideShowScreen from "./screens/SlideShowScreen";
import TripCreationScreen from "./screens/TripCreationScreen";
import ItineraryScreen from "./screens/ItineraryScreen";
import SignUpScreen from "./screens/SignUpScreen";
import InvitationScreen from "./screens/InvitationScreen";
import HomeScreen from "./screens/HomeScreen";
import Itinerary2Screen from "./screens/Itinerary2Screen";



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SlideShowScreen" component={SlideShowScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="TripCreationScreen" component={TripCreationScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="ItineraryScreen" component={ItineraryScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="InvitationScreen" component={InvitationScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Itinerary2Screen" component={Itinerary2Screen} options={{ headerShown: false}}/>
        <Stack.Screen name="Nav" component={TabNav} />

      </Stack.Navigator>
    </NavigationContainer>
  );
  }

 
