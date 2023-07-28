import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/ProfileScreen';
import UserMenu from '../screens/UserMenu';
import QrScreen from '../screens/QrScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Profile" component={Profile} />
		<Stack.Screen name="Edit" component={UserMenu} />
		<Stack.Screen name="Share" component={QrScreen} />
	</Stack.Navigator>
);

export default ProfileNavigator;
