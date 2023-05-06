import React from 'react';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
	Form,
	FormField,
	SubmitButton,
	ErrorMessage
} from '../components/forms';

function LoginScreen(props) {
	return (
		<ImageBackground
			source={require('../assets/login-background.png')}
			style={styles.background}
			blurRadius={5}
		>
			<Screen style={styles.container}>
				<Form>
					{/* <ErrorMessage
					error="Invalid email and/or password"
					visible={loginFailed}
				/> */}
					<View>
						<Image style={styles.bee} source={require('../assets/bee.png')} />
					</View>
					<View>
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
						<SubmitButton title="Login" />
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
		alignItems: 'center',
		padding: 20
	},
	container: {
		width: '100%',
		justifyContent: 'space-around',
		padding: 10
	},
	bee: {
		width: 250,
		height: 250,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
	}
});

export default LoginScreen;
