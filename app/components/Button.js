import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function Button({ title, onPress, color = 'black' }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginVertical: 5
	},
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default Button;
