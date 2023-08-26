import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import My360 from "@/components/My360";
import { imageUrls } from "@/data/imageUrls";
const index = () => {
	useEffect(() => {}, []);

	return (
		<View style={styles.container}>
			<My360 srcset={imageUrls} width={300} height={300} />
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "gray",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
