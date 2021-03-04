import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const SimpleLabel = (props: any) => <Text style={styles(props.width, props.margn).label}>{ props.text }</Text>;

export default SimpleLabel;
