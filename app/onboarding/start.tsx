import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

import Container from "@/components/shared/Container";
import { colors, fonts, sizes } from "@/constants/Theme";
import RoundedButton from "@/components/onboarding/RoundedButton";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const icon = {
	name: "chevron-forward",
	size: 24,
	color: colors.white,
};

const start = () => {
	const router = useRouter();
	const handleConnectWithWallet = () => {
		router.push("/onboarding/walletconnect");
	};
	return (
		<Container mode="top-horizontal-insets" style={styles.container}>
			{/* Logo */}
			<View style={styles.logoContainer}>
				<Image
					source={require("@/assets/images/logo.png")}
					style={styles.logo}
					contentFit="contain"
				/>
				<View style={styles.primaryCircle} />
				<View style={styles.secondaryCircle} />
			</View>
			<View style={styles.flexContainer}>
				{/* Text */}
				<View style={styles.textContainer}>
					<Text style={styles.headingText} numberOfLines={3}>
						All NFTs are certifiably unique and ownable{" "}
					</Text>
					<Text style={styles.paragraphText}>
						A crediable and excellent marketplace for non-fungible token.
					</Text>
				</View>
				{/* Buttons */}
				<View style={styles.buttonsContainer}>
					<View style={{ flex: 1 }}>
						<RoundedButton onPress={handleConnectWithWallet}>Connect with Wallet</RoundedButton>
					</View>
					<View style={{ flex: 0.3 }}>
						<RoundedButton onPress={handleConnectWithWallet} icon={icon} mode="outlined" />
					</View>
				</View>
			</View>
		</Container>
	);
};

export default start;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		justifyContent: "flex-end",
	},
	flexContainer: {
		gap: sizes.XL14 * 2,
		paddingBottom: sizes.XL14,
	},
	textContainer: {
		gap: sizes.XL4,
	},
	headingText: {
		fontSize: sizes.XL10,
		color: colors.white,
		fontFamily: fonts.semibold,
		width: "90%",
		lineHeight: 45,
	},
	paragraphText: {
		fontSize: sizes.XL6,
		color: colors.grayLight,
		fontFamily: fonts.light,
		width: "90%",
	},
	buttonsContainer: {
		flexDirection: "row",
		gap: 20,
	},
	logoContainer: {
		position: "absolute",
		top: 10,
	},
	logo: {
		width: sizes.XL14 * 2,
		height: sizes.XL14 * 2,
	},
	primaryCircle: {
		position: "absolute",
		top: -100,
		left: -50,
		width: 250,
		height: 250,
		borderRadius: 200,
		borderWidth: 1,
		borderColor: colors.blue,
		zIndex: 1,
	},
	secondaryCircle: {
		position: "absolute",
		top: -85,
		left: -80,
		width: 250,
		height: 250,
		borderRadius: 200,
		borderWidth: 2,
		borderColor: colors.gray,
	},
});
