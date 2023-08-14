import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, sizes } from "@/constants/Theme";

interface ContainerProps {
	children: ReactNode;
	style?: Object;
	mode?: string;
}

const Container = ({ children, style, mode }: ContainerProps) => {
	const { top, bottom, left, right } = useSafeAreaInsets();
	return (
		<View
			style={[
				styles.container,
				style,
				mode === "horizontal-insets" && {
					// paddingRight: right + sizes.LG,
					// paddingLeft: left + sizes.LG,
					paddingRight: right + sizes.XL3,
					paddingLeft: left + sizes.XL3,
				},
				mode === "top-insets" && {
					paddingTop: top + sizes.LG,
				},
				mode === "left-insets" && {
					paddingLeft: left + sizes.LG,
				},
				mode === "top-horizontal-insets" && {
					paddingTop: top + sizes.LG,
					// paddingRight: right + sizes.LG,
					// paddingLeft: left + sizes.LG,
					paddingRight: right + sizes.XL3,
					paddingLeft: left + sizes.XL3,
				},
			]}>
			{children}
		</View>
	);
};

export default Container;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
