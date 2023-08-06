import { colors, fonts, sizes } from "@/constants/Theme";
import { convertHex } from "@/utils/convertHex";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-paper";

interface ProfileAvatarProps {
	image: any;
	size: number;
	verified?: boolean;
	mode?: "no-border" | "with-border";
	rating?: number;
}

const ProfileAvatar = ({ image, size, verified, mode, rating }: ProfileAvatarProps) => {
	return (
		<View style={[styles.avatarContainer, mode === "no-border" && styles.noBorder]}>
			<Avatar.Image size={size} source={image} />
			{verified && <Verified />}
			{rating && <Rating num={rating} />}
		</View>
	);
};

const Verified = () => {
	return (
		<View style={styles.badgeContainer}>
			<Ionicons name="checkmark-circle" size={16} color={colors.blue} />
		</View>
	);
};

interface RatingProps {
	num: number;
}
const Rating = ({ num }: RatingProps) => {
	return (
		<View style={styles.ratingBadgeContainer}>
			<Text style={styles.ratingText}>{num}</Text>
		</View>
	);
};

export default ProfileAvatar;

const styles = StyleSheet.create({
	avatarContainer: {
		borderRadius: 100,
		borderWidth: sizes.XS,
		borderColor: convertHex(colors.grayLight, 0.5),
		position: "relative",
		alignSelf: "flex-start",
	},
	noBorder: {
		borderWidth: 0,
	},
	badgeContainer: {
		position: "absolute",
		bottom: 0,
		right: -5,
		borderRadius: 100,
		backgroundColor: "white",
		opacity: 0.8,
	},
	ratingBadgeContainer: {
		position: "absolute",
		bottom: 0,
		right: -10,
		borderRadius: 100,
		backgroundColor: "white",
		opacity: 0.8,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	ratingText: {
		fontFamily: fonts.medium,
		fontSize: sizes.XL5,
	},
});
