import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { colors, fonts, sizes } from "@/constants/Theme";
import { Avatar, IconButton, Text } from "react-native-paper";
import { convertHex } from "@/utils/convertHex";
import { Ionicons } from "@expo/vector-icons";
import ProfileAvatar from "./ProfileAvatar";
import EthSvg from "./EthSvg";

const NFTCard = ({ item }) => {
	return (
		<View style={styles.container}>
			<BlurView intensity={100} style={styles.blurContainer}>
				{/* <Text>NFTCard</Text> */}
				<View style={styles.imageContainer}>
					<Image source={item.itemImage} style={styles.image} resizeMode="cover" />
					<View style={styles.absoluteFlexContainer}>
						{/* Strip */}
						<View style={styles.typeContainer}>
							<Text style={styles.typeText}>{item.type}</Text>
						</View>
						{/* Icon */}
						<Ionicons name="heart-outline" size={sizes.XL10} color={colors.white} />
					</View>
				</View>
				{/* Name Time */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Text style={styles.itemName}>
						{item.itemName} {item.itemTag}
					</Text>
					<View style={styles.timeContainer}>
						<Ionicons name="time-outline" size={sizes.XL7} color={colors.white} />
						<Text style={styles.timeText}>{item.time} Left</Text>
					</View>
				</View>
				{/* Author */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
						<ProfileAvatar image={item.avatarImage} size={40} mode="no-border" verified />
						<View>
							<Text style={styles.avatarText}>{item.addedBy}</Text>
						</View>
					</View>
					{/* Price Container */}
					<View>
						<View style={styles.balanceContainer}>
							<EthSvg width={15} height={25} />
							<Text style={styles.balanceText}>{item.price} ETH</Text>
						</View>
					</View>
				</View>
				{/*  */}
			</BlurView>
		</View>
	);
};

export default NFTCard;

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		borderRadius: sizes.XL,
	},
	blurContainer: {
		padding: sizes.XL6,
		gap: sizes.XL4,
	},
	imageContainer: {
		// position: "relative",
		// backgroundColor: "red",
	},
	image: {
		width: 250,
		height: 250,
		borderRadius: sizes.XL,
	},
	absoluteFlexContainer: {
		flexDirection: "row",
		alignItems: "center",
		position: "absolute",
		justifyContent: "space-between",
		left: 0,
		right: 0,
		paddingHorizontal: sizes.XL,
		paddingVertical: sizes.XL,
	},
	typeContainer: {
		paddingHorizontal: sizes.XL6,
		paddingVertical: sizes.SM,
		backgroundColor: convertHex(colors.dark, 0.4),
		borderRadius: sizes.XS,
	},
	typeText: {
		color: colors.white,
	},
	itemName: {
		fontSize: sizes.XL6,
		fontFamily: fonts.medium,
		color: colors.white,
	},
	timeContainer: {
		flexDirection: "row",
		gap: sizes.XL,
		alignItems: "center",
	},
	timeText: {
		color: colors.white,
		fontFamily: fonts.light,
	},
	avatarText: {
		fontFamily: fonts.regular,
		fontSize: sizes.XL5,
		color: colors.white,
	},
	balanceContainer: {
		flexDirection: "row",
		gap: sizes.XL,
		borderWidth: 2,
		borderRadius: sizes.XL2,
		borderColor: colors.blue,
		paddingVertical: sizes.SM,
		paddingHorizontal: sizes.XL4,
		alignItems: "center",
		justifyContent: "center",
	},
	balanceText: {
		fontFamily: fonts.medium,
		fontSize: sizes.XL4,
		color: colors.white,
	},
});
