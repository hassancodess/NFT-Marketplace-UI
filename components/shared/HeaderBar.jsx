import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderBar = ({ children }) => {
	return <View style={styles.flexContainer}>{children}</View>;
};

export default HeaderBar;

const styles = StyleSheet.create({
	flexContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
