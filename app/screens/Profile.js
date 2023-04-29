import {
	StyleSheet,
	Text,
	Image,
	View,
	FlatList,
	ScrollView
} from 'react-native';
import React from 'react';

import colors from '../config/colors';
import Screen from '../components/Screen';
import Button from '../components/Button';
import Link from '../components/Link';
import Contact from '../components/Contact';

export default function Profile() {
	const contactInfo = [
		{
			email: 'maherreraiv1987@gmail.com',
			phone: '512-269-5432'
		}
	];

	const connectLinks = [
		{
			id: 1,
			title: '@mahiv87',
			icon: 'twitter',
			link: 'https://twitter.com/mahiv87',
			color: '#1da1f2'
		},
		{
			id: 2,
			title: 'linkedin.com/in/marcus-herrera-iv',
			icon: 'linkedin',
			link: 'https://www.linkedin.com/in/marcus-herrera-iv/',
			color: '#0e76a8'
		},
		{
			id: 3,
			title: 'github.com/mahiv87',
			icon: 'github',
			link: 'https://github.com/mahiv87',
			color: '#171515'
		},
		{
			id: 4,
			title: 'mahiv87.github.io/hire-marcus',
			icon: 'collage',
			link: 'https://mahiv87.github.io/hire-marcus/',
			color: 'black'
		},
		{
			id: 5,
			title: 'voxtroller',
			icon: 'youtube',
			link: 'https://www.youtube.com/channel/UCL6ocKj6KiQIvovUcziv8bQ',
			color: '#c4302b'
		},
		{
			id: 6,
			title: 'voxtroller',
			icon: 'steam',
			link: 'https://steamcommunity.com/id/voxtroller/',
			color: 'black'
		},
		{
			id: 7,
			title: 'voxtro11er',
			icon: 'twitch',
			link: 'https://www.twitch.tv/voxtro11er',
			color: '#6441a5'
		},
		{
			id: 8,
			title: 'voxtroller',
			icon: 'discord',
			link: 'https://discordapp.com/users/197130821113610240',
			color: '#7289da'
		}
	];

	return (
		<Screen>
			<View style={styles.container}>
				<Image
					style={styles.headerPhoto}
					source={require('../assets/sprague.jpg')}
				/>
				<Image
					style={styles.profilePhoto}
					source={require('../assets/me.png')}
				/>
				<Text style={styles.title}>Marcus Herrera</Text>
				<Text style={styles.subTitle}>Full Stack Developer</Text>
				<Contact email="maherreraiv1987@gmail.com" phone="512-269-5432" />
				<FlatList
					data={connectLinks}
					keyExtractor={(link) => link.id.toString()}
					renderItem={({ item }) => (
						<Link
							title={item.title}
							icon={item.icon}
							link={item.link}
							color={item.color}
						/>
					)}
				/>
				<View style={styles.buttonsContainer}>
					<Button title="Share" />
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	container: {
		flex: 1,
		marginVertical: 20
	},
	headerPhoto: {
		width: '100%',
		height: 200
	},
	profilePhoto: {
		width: 100,
		height: 100,
		borderRadius: 50,
		bottom: 50,
		marginLeft: 10,
		marginBottom: -50
	},
	scroll: {
		flex: 1
	},
	subTitle: {
		color: colors.medium,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 32,
		textAlign: 'center'
	}
});
