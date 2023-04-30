import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import UserMenu from './app/screens/UserMenu';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
	return (
		// <WelcomeScreen />
		// <ProfileScreen />
		<UserMenu />
		// <LoginScreen />
		// <RegisterScreen />
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
