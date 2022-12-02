import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Screen from '../components/Screen';
import Button from '../components/Button';
import colors from '../config/colors';

export default function UserMenu() {
	const [profilePic, setProfilePic] = useState(null);

	// Function to open photo library
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1
		});

		if (!result.canceled) {
			console.log(result);
			setProfilePic(result.uri);
		} else {
			alert('You did not select any image.');
		}
	};

	return (
		<Screen>
			<Text style={styles.title}>Add profile photo</Text>
			<View style={[styles.buttonsContainer]}>
				{profilePic !== null ? (
					<Image source={{ uri: profilePic }} style={styles.profilePic} />
				) : (
					<MaterialCommunityIcons name="account" size={48} color="black" />
				)}
				<Button title="Choose photo" color="secondary" onPress={pickImageAsync} />
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
		padding: 20,
		borderBottomWidth: 2,
		borderBottomColor: colors.light
	},
	profilePic: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	title: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 10,
		fontStyle: 'italic'
	}
});
