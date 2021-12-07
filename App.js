import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import FirstScreen from './screens/FirstScreen';
import SignInScreen from './screens/SignInScreen';
import SlideShowScreen from "./screens/SlideShowScreen";
import TripCreationScreen from "./screens/TripCreationScreen";
import ItineraryScreen from "./screens/ItineraryScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SlideShowScreen" component={SlideShowScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="TripCreationScreen" component={TripCreationScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="ItineraryScreen" component={ItineraryScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

 
