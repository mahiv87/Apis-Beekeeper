import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

import colors from '../config/colors';
import Button from '../components/Button';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

export default function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			source={require('../assets/login-background.png')}
			style={styles.background}
			blurRadius={5}
		>
			<Screen style={styles.container}>
				{/* <Text style={styles.text}>BeeBee</Text> */}
				<View style={styles.logoContainer}>
					<Image style={styles.bee} source={require('../assets/bee.png')} />
					<Text style={styles.tagline}>buzz with the sweetest hive</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<Button
						title="Login"
						onPress={() => navigation.navigate(routes.LOGIN)}
					/>
					<Button
						title="Register"
						onPress={() => navigation.navigate(routes.REGISTER)}
					/>
				</View>
			</Screen>
		</ImageBackground>
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
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: 20
	},
	bee: {
		width: 250,
		height: 250,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
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
