import { colors, sizes, fonts } from "@/constants/Theme";
import { StyleSheet } from "react-native";

const global = StyleSheet.create({
	headingText: {
		fontSize: sizes.XL10,
		textAlign: "center",
		fontFamily: fonts.bold,
		color: colors.white,
		lineHeight: 40,
	},
	paragraphText: {
		fontSize: sizes.XL5,
		color: colors.white,
		textAlign: "center",
	},
});
export default global;
