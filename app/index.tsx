import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const IndexPage = () => {
	return (
		<View>
			<Text>IndexPage</Text>
			<Link href={"/onboarding/"}>Go to Onboarding</Link>
			<Link href={"/dashboard/"}>Go to Dashboard</Link>
		</View>
	);
};

export default IndexPage;

const styles = StyleSheet.create({});
