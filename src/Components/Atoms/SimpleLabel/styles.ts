import { StyleSheet } from 'react-native';

const styles = (width: string, margn: string) => {

	return StyleSheet.create(
	{
		label: {
			fontStyle: 'normal',
			fontSize: 20,
			textAlign: 'center',
			fontFamily: 'Roboto',
			width: width,
			alignSelf: 'center',
			marginTop: margn,
			marginBottom: margn,
		}
	});
}

export default styles;