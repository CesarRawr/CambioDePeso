import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import SimpleLabel from '../../Components/Atoms/SimpleLabel';

const ConvertionScreen = ({route, navigation}: {route: any, navigation: any}) => {

	// Desestructuracion
	const {name, img, result} = route.params;

	// Vista
	return (
		<View style={ styles.container }>
			<SimpleLabel text={ name } with="100%" margn="5%" />
			<SimpleLabel text={ `Tu peso en ${name} es:` } with="100%" margn="5%"/>
			<Text>{ result }</Text>
		</View>
	);
}

export default ConvertionScreen;
