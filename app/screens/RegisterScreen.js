import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';

import Screen from '../components/Screen';
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton
} from '../components/forms';

function RegisterScreen(props) {
	return (
		<ImageBackground
			source={require('../assets/login-background.png')}
			style={styles.background}
			blurRadius={3}
		>
			<Screen style={styles.container}>
				<Form>
					<View>
						<Image style={styles.bee} source={require('../assets/bee.png')} />
					</View>
					<View>
						<FormField
							autoCorrect={false}
							icon="account"
							name="name"
							placeholder="Name"
						/>
						<FormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							name="email"
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<FormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							name="password"
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<SubmitButton title="Register" />
					</View>
				</Form>
			</Screen>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	bee: {
		width: 250,
		height: 250,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
	},
	container: {
		width: '100%',
		justifyContent: 'space-around',
		padding: 10
	}
});

export default RegisterScreen;
