import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Contact({ email, phone }) {
	return (
		<View style={styles.container}>
			<View style={styles.contactItem}>
				<MaterialCommunityIcons name="email" size={24} color={colors.black} />
				<Text style={styles.title} onPress={() => Linking.openURL(`mailto:${email}`)}>
					{email}
				</Text>
			</View>
			<View style={styles.contactItem}>
				<MaterialCommunityIcons name="phone" size={24} color={colors.black} />
				<Text style={styles.title} onPress={() => Linking.openURL(`tel:${phone}`)}>
					{phone}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contactItem: {
		flexDirection: 'row'
	},
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		marginTop: 5
	},
	title: {
		marginHorizontal: 20
	}
});

export default Contact;
