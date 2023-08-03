import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { colors, sizes } from "@/constants/Theme";
import { convertHex } from "@/utils/convertHex";

const CategoryButton = ({ active, children }) => {
	return (
		<Button labelStyle={styles.label} style={[styles.button, active && styles.activeButton]}>
			{children}
		</Button>
	);
};

export default CategoryButton;

const styles = StyleSheet.create({
	button: {
		borderRadius: sizes.XL2,
		backgroundColor: convertHex(colors.grayLight, 0.1),
		paddingVertical: sizes.XS,
		paddingHorizontal: sizes.XL6,
	},
	label: {
		color: colors.white,
	},
	activeButton: {
		backgroundColor: colors.blue,
	},
});
