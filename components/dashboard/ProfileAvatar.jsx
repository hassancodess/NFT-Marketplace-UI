import { colors, sizes } from "@/constants/Theme";
import { convertHex } from "@/utils/convertHex";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const ProfileAvatar = () => {
	return (
		<View style={styles.avatarContainer}>
			<Avatar.Image
				// style={styles.avatarContainer}
				size={60}
				source={require("../../assets/images/avatar/avatar.webp")}
			/>
		</View>
	);
};

export default ProfileAvatar;

const styles = StyleSheet.create({
	avatarContainer: {
		// backgroundColor: "red",
		borderRadius: 100,
		borderWidth: sizes.XS,
		borderColor: convertHex(colors.grayLight, 0.5),
	},
});
