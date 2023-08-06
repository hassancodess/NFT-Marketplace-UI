import { StyleSheet } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { colors, fonts, sizes } from "@/constants/Theme";

const NextButton = ({ onPress, children }) => {
	const handlePress = () => {
		onPress();
		console.log("pressed");
	};
	return (
		<Button onPress={handlePress} style={styles.button}>
			<Text style={styles.buttonText}>{children}</Text>
		</Button>
	);
};

export default NextButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.blue,
		borderRadius: sizes.LG,
		width: "90%",
		paddingVertical: sizes.LG,
	},
	buttonText: {
		color: colors.white,
		fontFamily: fonts.medium,
		fontSize: sizes.XL6,
	},
});
