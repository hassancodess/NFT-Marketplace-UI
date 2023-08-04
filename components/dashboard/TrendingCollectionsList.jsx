import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { colors, fonts, sizes } from "@/constants/Theme";

const TrendingCollectionsList = () => {
	return (
		<View>
			<Text style={styles.headingText}>Trending Collections</Text>
		</View>
	);
};

export default TrendingCollectionsList;

const styles = StyleSheet.create({
	headingText: {
		color: colors.white,
		fontFamily: fonts.bold,
		fontSize: sizes.XL8,
	},
});
