import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import FirstScreen from './screens/FirstScreen';
import SignInScreen from './screens/SignInScreen';
import SlideShowScreen from "./screens/SlideShowScreen";
import SignUpScreen from "./screens/SignUpScreen";
import InvitationScreen from "./screens/InvitationScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SlideShowScreen" component={SlideShowScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="InvitationScreen" component={InvitationScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

 