import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import Button from '../components/Button';

export default function UserMenu() {
	return (
		<Screen>
			<View style={[styles.buttonsContainer]}>
				<MaterialCommunityIcons name="account" size={48} color="black" />
				<Button title="Upload photo" color="secondary" />
			</View>
			<View></View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		padding: 20
	}
});
