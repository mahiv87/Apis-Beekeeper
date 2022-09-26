import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Link({ title, icon, link, color }) {
	return (
		<View style={styles.link}>
			<MaterialCommunityIcons name={icon} size={32} color={color} />
			<Text style={styles.linkTitle} onPress={() => Linking.openURL(link)}>
				{title}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	link: {
		flexDirection: 'row',
		margin: 20,
		borderBottomWidth: 2,
		borderBottomColor: colors.light
	},
	linkTitle: {
		marginLeft: 20
	}
});

export default Link;
