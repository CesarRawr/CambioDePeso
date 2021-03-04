import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const SimpleButton = (props: any) => {

	return (
		<TouchableHighlight style={ styles.container } onPress={ props.onPress } >
			<View style={ styles.button }>
				<Text style={ styles.text }>{ props.title }</Text>
			</View>
		</TouchableHighlight>
	);
};

export default SimpleButton;