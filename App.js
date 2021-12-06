import React from 'react';

import FirstScreen from './screens/SlideShowScreen';
import SignInScreen from './screens/SignInScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="FirstScreen " component={FirstScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131256',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
