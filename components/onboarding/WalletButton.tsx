import { Pressable, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { Button } from "react-native-paper";
import { colors, sizes } from "@/constants/Theme";

interface WalletButtonProps {
	children: ReactNode;
}

const WalletButton: React.FC<WalletButtonProps> = ({ children }) => {
	return <Button style={styles.buttonStyle}>{children}</Button>;
};

export default WalletButton;

const styles = StyleSheet.create({
	buttonStyle: {
		gap: 20,
		flexDirection: "row",
		backgroundColor: colors.gray,
		alignSelf: "stretch",
		paddingVertical: sizes.LG,
		paddingHorizontal: sizes.XL6,
		borderRadius: sizes.XL,
	},
});
