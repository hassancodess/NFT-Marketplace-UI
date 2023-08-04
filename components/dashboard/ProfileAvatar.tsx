import { colors, sizes } from "@/constants/Theme";
import { convertHex } from "@/utils/convertHex";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

interface ProfileAvatarProps {
	image: any; // Replace 'any' with the appropriate type of the image prop
	size: number;
	verified?: boolean;
	mode?: "no-border" | "with-border";
}

const ProfileAvatar = ({ image, size, verified, mode }: ProfileAvatarProps) => {
	return (
		<View style={[styles.avatarContainer, mode === "no-border" && styles.noBorder]}>
			<Avatar.Image size={size} source={image} />
			{verified && <Verified />}
		</View>
	);
};

const Verified = () => {
	return (
		<View style={styles.verifiedBadgeContainer}>
			<Ionicons name="checkmark-circle" size={16} color={colors.blue} />
		</View>
	);
};

export default ProfileAvatar;

const styles = StyleSheet.create({
	avatarContainer: {
		borderRadius: 100,
		borderWidth: sizes.XS,
		borderColor: convertHex(colors.grayLight, 0.5),
	},
	noBorder: {
		borderWidth: 0,
	},
	verifiedBadgeContainer: {
		position: "absolute",
		bottom: 0,
		right: -5,
		borderRadius: 100,
		backgroundColor: "white",
		opacity: 0.8,
	},
});
