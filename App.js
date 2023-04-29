import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Profile from './app/screens/Profile';
import UserMenu from './app/screens/UserMenu';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
	return (
		// <WelcomeScreen />
		// <Profile />
		// <UserMenu />
		<LoginScreen />
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
