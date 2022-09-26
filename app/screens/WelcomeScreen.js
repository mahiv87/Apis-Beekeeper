import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

import colors from '../config/colors';

export default function WelcomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={require('../../assets/logo.jpg')} />
			<Text style={styles.text}>BeeKeeper</Text>
			<Text style={styles.subTitle}></Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight
	},
	logo: {
		width: 210,
		height: 210
	},
	subTitle: {
		color: colors.medium,
		fontStyle: 'italic'
	},
	text: {
		fontSize: 52,
		fontFamily: 'Roboto',
		fontWeight: 'bold'
	}
});
