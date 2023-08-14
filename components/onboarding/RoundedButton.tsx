import { StyleSheet } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { colors, fonts, sizes } from "@/constants/Theme";
import { Ionicons } from "@expo/vector-icons";

interface IconProps {
	size: number;
	name: string;
	color: string;
}

interface RoundedButtonProps {
	onPress: () => void;
	children?: React.ReactNode;
	mode?: string;
	icon?: IconProps;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ onPress, children, mode, icon }) => {
	const handlePress = () => {
		onPress();
	};
	return (
		<Button onPress={handlePress} style={[styles.button, mode === "outlined" && styles.outlined]}>
			{icon ? (
				<Ionicons size={icon.size} name={icon.name} color={icon.color} />
			) : (
				<Text style={styles.buttonText}>{children}</Text>
			)}
		</Button>
	);
};

export default RoundedButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.blue,
		borderRadius: sizes.LG,
		paddingVertical: sizes.LG,
		alignSelf: "stretch",
	},
	buttonText: {
		color: colors.white,
		fontFamily: fonts.medium,
		fontSize: sizes.XL5,
	},
	outlined: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: colors.white,
	},
});
