import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton
} from '../components/forms';
import useApi from '../hooks/useApi';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(8).label('Password')
});

function RegisterScreen() {
	const registerApi = useApi(usersApi.register);
	const loginApi = useApi(authApi.login);
	const auth = useAuth();
	const [error, setError] = useState();

	const handleSubmit = async (userInfo) => {
		const result = await registerApi.request(userInfo);

		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError('An unexpected error occurred.');
				console.log(result);
			}
			return;
		}

		const { data: authToken } = await loginApi.request(
			userInfo.email,
			userInfo.password
		);
		auth.login(authToken);
	};

	return (
		<ImageBackground
			source={require('../assets/login-background.png')}
			style={styles.background}
			blurRadius={3}
		>
			<ActivityIndicator visible={registerApi.loading || loginApi.loading} />
			<Screen style={styles.container}>
				<View>
					<Image style={styles.bee} source={require('../assets/bee.png')} />
				</View>
				<Form
					initialValues={{ name: '', email: '', password: '' }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<View>
						<ErrorMessage error={error} visible={error} />
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
	container: {
		width: '100%',
		justifyContent: 'space-around',
		padding: 10
	}
});

export default RegisterScreen;
