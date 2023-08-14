import { StyleSheet, View } from "react-native";
import React from "react";
import Container from "@/components/shared/Container";
import { colors, fonts, sizes } from "@/constants/Theme";
import { Image } from "expo-image";
import { normalize } from "@/utils/normalize";
import { Text } from "react-native-paper";
import WalletButton from "@/components/onboarding/WalletButton";
import RoundedButton from "@/components/onboarding/RoundedButton";
import global from "@/styles/global";

const connectWithWallet = () => {
	return (
		<Container mode="top-horizontal-insets" style={styles.container}>
			{/* Image */}
			<View style={styles.imageContainer}>
				<Image
					source={require("@/assets/images/wallet.png")}
					style={styles.image}
					contentFit="contain"
				/>
			</View>
			{/* Text */}
			<View style={styles.textContainer}>
				<Text style={global.headingText}>Choose your wallet</Text>
				<Text style={[global.paragraphText, styles.grayText]}>
					By connecting your wallet, you agree to our{" "}
					<Text style={styles.linkText}>Terms of Service</Text> and{" "}
					<Text style={styles.linkText}>Privacy Policy</Text>
				</Text>
			</View>
			{/* WalletButtons */}
			<View style={styles.walletButtonsContainer}>
				<WalletButton>
					<View style={styles.buttonContainer}>
						<Image
							source={require("@/assets/images/wallet-buttons/metamask.png")}
							style={styles.buttonIcon}
							contentFit="contain"
						/>
						<Text style={styles.buttonText}>MetaMask</Text>
					</View>
				</WalletButton>
				<WalletButton>
					<View style={styles.buttonContainer}>
						<Image
							source={require("@/assets/images/wallet-buttons/trustwallet.png")}
							style={styles.buttonIcon}
							contentFit="contain"
						/>
						<Text style={styles.buttonText}>Trust Wallet</Text>
					</View>
				</WalletButton>
				<WalletButton>
					<View style={styles.buttonContainer}>
						<Image
							source={require("@/assets/images/wallet-buttons/address.png")}
							style={styles.buttonIcon}
							contentFit="contain"
						/>
						<Text style={styles.buttonText}>Enter ethereum address</Text>
					</View>
				</WalletButton>
			</View>
			{/* Continue */}
			<View style={styles.bottomContainer}>
				<RoundedButton>Continue</RoundedButton>
			</View>
		</Container>
	);
};

export default connectWithWallet;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		gap: sizes.XL10,
	},
	imageContainer: {
		alignSelf: "center",
	},
	image: {
		width: normalize(250),
		height: normalize(250),
	},
	textContainer: {
		alignItems: "center",
		gap: sizes.XL4,
	},
	grayText: {
		color: colors.grayLight,
	},
	linkText: {
		color: colors.white,
	},
	walletButtonsContainer: {
		gap: sizes.XL2,
	},
	buttonIcon: {
		width: sizes.XL10,
		height: sizes.XL10,
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: sizes.XL6,
	},
	buttonText: {
		color: colors.white,
		fontSize: sizes.XL5,
		fontFamily: fonts.semibold,
	},
	bottomContainer: {
		paddingTop: sizes.XL6,
		paddingBottom: sizes.XL10,
		alignItems: "center",
		// paddingHorizontal: sizes.XL10,
	},
});
