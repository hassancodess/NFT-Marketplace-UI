import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { colors, fonts, sizes } from "@/constants/Theme";
import TrendingCollectionItem from "@/components/dashboard/TrendingCollections/TrendingCollectionItem";
import { TrendingCollections } from "@/data/TrendingCollections";

const TrendingCollectionsList = () => {
	return (
		<View style={styles.flexContainer}>
			<Text style={styles.headingText}>Trending Collections</Text>
			<View style={styles.container}>
				{TrendingCollections.map((item, index) => {
					return <TrendingCollectionItem item={item} index={index} key={item.id} />;
				})}
			</View>
		</View>
	);
};

export default TrendingCollectionsList;

const styles = StyleSheet.create({
	flexContainer: {
		gap: sizes.XL5,
	},
	headingText: {
		color: colors.white,
		fontFamily: fonts.bold,
		fontSize: sizes.XL8,
	},
	container: {
		gap: sizes.XL7,
	},
});
