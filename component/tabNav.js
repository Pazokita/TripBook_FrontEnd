import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Itinerary2Screen from '../screens/Itinerary2Screen';
import MapScreen from '../screens/MapScreen';
import CheckListScreen from '../screens/CheckListScreen';
import ChatScreen from '../screens/ChatScreen';
import PlanningScreen from '../screens/PlanningScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

const TabNav = props => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName
					if (route.name === 'Jour par jour') {
						iconName = 'ios-calendar'
					} else if (route.name === 'Map') {
						iconName = 'ios-map'
					}else if (route.name === 'Checklist') {
						iconName = 'ios-list'
					}else if (route.name === 'Chat') {
						iconName = 'ios-chatbubbles'
					}else if (route.name === 'Planning') {
						iconName = 'ios-calendar-outline'
					}
					return <Ionicons name={iconName} size={24} color={color} />
				},
				tabBarStyle: { backgroundColor: '#131256' },
				tabBarActiveTintColor: '#FFB81F',
				tabBarInactiveTintColor: '#ffffff',
			})}
		>
			<Tab.Screen
				options={{ headerShown: false }}
				name="Jour par jour"
				component={Itinerary2Screen}
			/>
			<Tab.Screen
				options={{ headerShown: false }}
				name="Map"
				component={MapScreen}
			/>
            <Tab.Screen
				options={{ headerShown: false }}
				name="Checklist"
				component={CheckListScreen}
			/>
            <Tab.Screen
				options={{ headerShown: false }}
				name="Chat"
				component={ChatScreen}
			/>
            <Tab.Screen
				options={{ headerShown: false }}
				name="Planning"
				component={PlanningScreen}
			/>
		</Tab.Navigator>
	)
}

export default TabNav

