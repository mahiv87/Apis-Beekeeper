import React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import Screen from '../components/Screen';

function SimpleQr() {
	return <SvgQRCode value="https://github.com/mahiv87" size={200} />;
}

function QrScreen() {
	return (
		<Screen>
			<View style={styles.container}>
				<SimpleQr />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#ecf0f1'
	}
});

export default QrScreen;
