import React, {useState} from 'react';
import { View } from 'react-native';

import styles from './styles';
import Options from '../../Components/Molecules/Options';
import FormGroup from '../../Components/Molecules/FormGroup';

const Home = ({ navigation }: { navigation: any }) => {

	const buttons: string[] = ["Mercurio", "Venus"]; 
	
	const [valid, setValid] = useState(false);
	const [weight, setWeight] = useState(0);

	return (
		<View style={ styles.container }>
			<FormGroup 
				labelText="Peso: " 
				inputPlaceholder="Introduce tu peso" 
				setValid={ setValid } 
				setWeight={ setWeight }
			/>
			
			<Options 
				buttons={ buttons } 
				navigation={ navigation } 
				valid={ valid } 
				weight={weight}
			/>
		</View>
	);
}

export default Home;