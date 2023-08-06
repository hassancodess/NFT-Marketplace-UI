import { StyleSheet, View } from "react-native";
import React from "react";
import { colors, fonts, sizes } from "../../constants/Theme";
import EthSvg from "@/components/shared/EthSvg";
import { Text } from "react-native-paper";

const Balance = () => {
	return (
		<View style={{ position: "relative" }}>
			<View style={styles.balanceContainer}>
				<EthSvg width={sizes.XL7} height={sizes.XL9} />
				<Text style={styles.balanceText}>26,031</Text>
			</View>
			<View style={styles.absoluteContainer}>
				<Text style={styles.absoluteText}>Balance</Text>
			</View>
		</View>
	);
};

export default Balance;

const styles = StyleSheet.create({
	balanceContainer: {
		flexDirection: "row",
		gap: sizes.XL6,
		borderWidth: 1,
		borderRadius: sizes.XL5,
		borderColor: colors.grayLight,
		paddingVertical: sizes.XL2,
		paddingHorizontal: sizes.XL6,
		alignItems: "center",
		justifyContent: "center",
	},
	balanceText: {
		fontFamily: fonts.bold,
		fontSize: sizes.XL8,
		color: colors.white,
	},
	absoluteContainer: {
		position: "absolute",
		bottom: -5,
		alignSelf: "center",
		backgroundColor: colors.dark,
	},
	absoluteText: {
		color: colors.white,
		paddingHorizontal: sizes.XL4,
		fontSize: sizes.XL4,
		fontFamily: fonts.medium,
	},
});
