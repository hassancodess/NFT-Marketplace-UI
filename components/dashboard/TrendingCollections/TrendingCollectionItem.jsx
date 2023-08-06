import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileAvatar from "@/components/shared/ProfileAvatar";
import avatar_image from "@/assets/images/avatar/1.png";
import { colors, fonts, sizes } from "@/constants/Theme";
import EthSvg from "@/components/shared/EthSvg";

const TrendingCollectionItem = ({ item, index }) => {
	const { profile, name, username, percentage, earnings } = item;
	console.log(index);
	const rating = index + 1;
	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<ProfileAvatar image={profile} size={60} mode="no-border" rating={rating} />
				<UserText name={name} username={username} />
			</View>
			<Details percentage={percentage} earnings={earnings} />
		</View>
	);
};

const UserText = ({ name, username }) => {
	return (
		<View style={styles.textContainer}>
			<Text style={styles.nameText}>{name}</Text>
			<Text style={styles.usernameText}>{username}</Text>
		</View>
	);
};

const Details = ({ percentage, earnings }) => {
	return (
		<View style={styles.flexContainer}>
			<View style={styles.detailsContainer}>
				<EthSvg width={sizes.XL4} height={sizes.XL7} />
				<Text style={styles.detailsText}>{earnings}</Text>
			</View>
			<Text style={styles.percentageText}>{percentage}%</Text>
		</View>
	);
};

export default TrendingCollectionItem;

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "red",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: sizes.XL7,
	},
	textContainer: {
		// gap: sizes.XS,
		alignItems: "flex-start",
	},
	nameText: {
		fontSize: sizes.XL3,
		fontFamily: fonts.medium,
		color: colors.white,
	},
	usernameText: {
		fontFamily: fonts.light,
		fontSize: sizes.XL2,
		color: colors.grayLight,
	},
	flexContainer: {
		// justifyContent: "center",
		alignItems: "flex-end",
	},
	detailsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: sizes.XL4,
	},
	detailsText: {
		fontSize: sizes.XL6,
		color: colors.white,
		fontFamily: fonts.medium,
	},
	percentageText: {
		color: colors.success,
		fontSize: sizes.XL4,
		fontFamily: fonts.regular,
	},
});
