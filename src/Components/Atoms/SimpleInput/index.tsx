import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const SimpleInput = (props: any) => {
	
	return (
		<TextInput 
			style={styles(props.width).input} 
			keyboardType='numeric' 
			placeholder={ props.placeholder }
			onChangeText={(text: string) => {
				const regex = /^[0-9]*$/;
				regex.test(text) && text !== "" ? (
					props.setValid(true),
					props.setWeight(parseInt(text))
				) : (
					props.setValid(false)
				) 
			}}
		/>
	)
}

export default SimpleInput;