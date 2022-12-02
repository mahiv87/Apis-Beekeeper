import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Screen from '../components/Screen';
import Button from '../components/Button';

export default function UserMenu() {
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1
		});

		if (!result.canceled) {
			console.log(result);
		} else {
			alert('You did not select any image.');
		}
	};

	return (
		<Screen>
			<View style={[styles.buttonsContainer]}>
				<MaterialCommunityIcons name="account" size={48} color="black" />
				<Button title="Upload photo" color="secondary" onPress={pickImageAsync} />
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
