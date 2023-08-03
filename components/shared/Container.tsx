import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, sizes } from "@/constants/Theme";

interface ContainerProps {
	children: ReactNode;
	style: Object;
}

const Container = ({ children, style }: ContainerProps) => {
	const { top, bottom, left, right } = useSafeAreaInsets();
	return (
		<View
			style={[
				styles.container,
				{
					paddingTop: top + sizes.XL6,
					paddingBottom: bottom + sizes.XL,
					paddingRight: right + sizes.XL4,
					paddingLeft: left + sizes.XL4,
				},
				style,
			]}>
			{children}
		</View>
	);
};

export default Container;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark,
	},
});
