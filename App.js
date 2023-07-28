import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import UserMenu from './app/screens/UserMenu';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import UploadScreen from './app/screens/UploadScreen';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import AuthNavigator from './app/navigation/AuthNavigator';
import ProfileNavigator from './app/navigation/ProfileNavigator';

export default function App() {
	const [user, setUser] = useState();
	const [appIsReady, setAppIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync();
				const result = await restoreUser();
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			const result = await SplashScreen.hideAsync();
			// console.log(result, 'hide?');
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer ref={navigationRef} onReady={onLayoutRootView}>
				{/* {user ? <ProfileScreen /> : <AuthNavigator />} */}
				<ProfileNavigator />
			</NavigationContainer>
		</AuthContext.Provider>
		// <WelcomeScreen />
		// <ProfileScreen />
		// <UserMenu />
		// <LoginScreen />
		// <RegisterScreen />
		// <UploadScreen />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
