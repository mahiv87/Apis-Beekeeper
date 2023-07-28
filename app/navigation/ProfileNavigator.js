import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/ProfileScreen';
import UserMenu from '../screens/UserMenu';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Profile"
			component={Profile}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Edit" component={UserMenu} />
	</Stack.Navigator>
);

export default ProfileNavigator;
