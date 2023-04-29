import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

import colors from '../config/colors';
import Button from '../components/Button';
import Screen from '../components/Screen';

export default function WelcomeScreen() {
	return (
		<Screen style={styles.container}>
			{/* <Text style={styles.text}>BeeBee</Text> */}
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo.jpg')} />
				<Text style={styles.tagline}>buzz with the sweetest hive</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Button title="Login" />
				<Button title="Register" />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttonsContainer: {
		padding: 20,
		width: '80%'
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center'
	},
	logo: {
		width: 250,
		height: 250
	},
	tagline: {
		color: colors.medium,
		fontSize: 20,
		fontStyle: 'italic'
		// marginVertical: 20
	},
	text: {
		fontSize: 52,
		fontFamily: 'Roboto',
		fontWeight: 'bold'
	}
});
