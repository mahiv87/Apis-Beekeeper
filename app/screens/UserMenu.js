import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Screen from '../components/Screen';
import Button from '../components/Button';
import {
	Form,
	FormField,
	FormPicker as Picker,
	SubmitButton
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import Text from '../components/Text';

import colors from '../config/colors';

export default function UserMenu() {
	const [profilePic, setProfilePic] = useState(null);
	const [bannerPic, setBannerPic] = useState(null);

	// Function to open photo library and set profile pic
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1
		});

		if (!result.cancelled) {
			console.log(result);
			setProfilePic(result.uri);
		} else {
			alert('You did not select any image.');
		}
	};

	// Function to set banner pic
	const bannerImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1
		});

		if (!result.cancelled) {
			console.log(result);
			setBannerPic(result.uri);
		} else {
			alert('You did not select any image.');
		}
	};

	// ==============================================================
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing(
			{ ...listing, location },
			(progress) => setProgress(progress)
		);

		if (!result.ok) {
			setUploadVisible(false);
			return alert('Could not save the listing...');
		}

		resetForm();
	};

	return (
		<Screen style={styles.container}>
			{/* <UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/> */}
			<Form
				initialValues={{
					platform: '',
					link: '',
					image: []
				}}
				onSubmit={handleSubmit}
				// validationSchema={validationSchema}
			>
				<View>
					<Text>Avatar</Text>
					<FormImagePicker name="images" />
				</View>
				<View>
					<Text>Banner</Text>
					<FormImagePicker name="images" />
				</View>
				<FormField maxLength={255} name="platform" placeholder="Platform" />
				<FormField maxLength={255} name="link" placeholder="Link" />
				<SubmitButton title="Submit" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	title: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 10,
		fontStyle: 'italic'
	}
});
