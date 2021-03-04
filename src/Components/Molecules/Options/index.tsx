import React, { useState } from 'react';
import { View, Text } from 'react-native';

import SimpleLabel from '../../Atoms/SimpleLabel';
import SimpleButton from '../../Atoms/SimpleButton';

import styles from './styles';

const Options = (props: any) => {

	// Set gravedad
	const gravityHandler = (planet: string): number => {

		let gravity: number = -1;

		switch (planet) {
			case "Mercurio":
				gravity = 0.377;
				break;
			case "Venus":
				gravity = 0.904;
				break;
			default:
				alert("Algo salió muy mal");
				break;
		}

		return gravity;
	}

	// Cargando botones
	const itemList: any = props.buttons.map((planet: string) => {
		return <SimpleButton key={planet} title={ planet } onPress={ () => {

				let gravity: number, result: number;

				// Verificar si es valida la entrada
				props.valid === true ? (
					gravity = gravityHandler(planet),
					result = props.weight * gravity,
					props.navigation.navigate('ConvertionScreen', {
						name: planet,
						source: '../../../../assets/icon.png',
						result: result,
					})
				):(
					alert("No deje el campo vacio y solo introduzca numeros")
				)
			}
		} />
	});

	// Vista
	return (
		<View style={styles.container}>
			<SimpleLabel text="Calcular peso en:" width="100%" margn="5%"/>
			{ itemList }
		</View>
	);
}

export default Options;