import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { Image } from "expo-image";
import { colors, fonts, sizes } from "@/constants/Theme";

const Onboarding3 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={require("@/assets/onboarding/onboarding-3.png")}
					style={styles.image}
					// allowDownscaling
					contentFit="contain"
				/>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.headingText} numberOfLines={2}>
					Discovering the world of crypto art
				</Text>
				<Text style={styles.paragraphText}>Buy and sell digital items</Text>
			</View>
		</View>
	);
};

export default Onboarding3;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
	},
	image: {
		width: "auto",
		height: "50%",
		// flex: 1,
		// backgroundColor: "red",
	},
	textContainer: {
		flex: 0.6,
		backgroundColor: colors.gray,
		borderTopEndRadius: sizes.XL8,
		borderTopStartRadius: sizes.XL8,
		alignItems: "center",
		paddingBottom: sizes.XL10,
		justifyContent: "center",
		paddingHorizontal: sizes.XL14,
		gap: sizes.XL5,
	},
	headingText: {
		fontSize: sizes.XL11,
		textAlign: "center",
		fontFamily: fonts.bold,
		color: colors.white,
		lineHeight: 45,
	},
	paragraphText: {
		fontSize: sizes.XL6,
		color: colors.white,
		// letterSpacing: 0.5,
	},
});
