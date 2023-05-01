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
import PlatformPickerItem from '../components/PlatformPickerItem';

import colors from '../config/colors';

const platforms = [
	{
		backgroundColor: '#1da1f2',
		icon: 'twitter',
		label: 'Twitter',
		value: 1
	},
	{
		backgroundColor: '#0e76a8',
		icon: 'linkedin',
		label: 'LinkedIn',
		value: 2
	},
	{
		backgroundColor: '#171515',
		icon: 'github',
		label: 'GitHub',
		value: 3
	},
	{
		backgroundColor: '#c4302b',
		icon: 'youtube',
		label: 'Youtube',
		value: 4
	},
	{
		backgroundColor: '#000',
		icon: 'steam',
		label: 'Steam',
		value: 5
	},
	{
		backgroundColor: '#6441a5',
		icon: 'twitch',
		label: 'Twitch',
		value: 6
	},
	{
		backgroundColor: '#7289da',
		icon: 'discord',
		label: 'Discord',
		value: 7
	},
	{
		backgroundColor: '#E1306C',
		icon: 'instagram',
		label: 'Instagram',
		value: 8
	},
	{
		backgroundColor: '#FFFC00',
		iconColor: '#000',
		icon: 'snapchat',
		label: 'Snapchat',
		value: 9
	},
	{
		backgroundColor: '#000',
		icon: 'collage',
		label: 'Other',
		value: 9
	}
];

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
				<Picker
					items={platforms}
					name="platform"
					numberOfColumns={3}
					PickerItemComponent={PlatformPickerItem}
					placeholder="Platform"
					width="50%"
				/>
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
