import React from 'react';
import { View } from 'react-native';

import SimpleLabel from '../../Atoms/SimpleLabel';
import SimpleInput from '../../Atoms/SimpleInput';

import styles from './styles';

const FormGroup = (props: any) => {
	return (
		<View style={styles.container}>
			<SimpleLabel 
				text={ props.labelText } 
				width="30%" 
				margn="auto"
			/>
			
			<SimpleInput 
				placeholder={ props.inputPlaceholder } 
				width="70%" 
				setValid={ props.setValid } 
				setWeight={ props.setWeight }
			/>
		</View>
	);
}

export default FormGroup;
