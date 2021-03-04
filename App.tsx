import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Pages/Home';
import ConvertionScreen from './src/Pages/ConvertionScreen'

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
				<Stack.Screen name="Home" component={ Home } />
				<Stack.Screen name="ConvertionScreen" component={ ConvertionScreen } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;