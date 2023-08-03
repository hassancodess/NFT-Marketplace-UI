import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/shared/Container";
import HeaderBar from "@/components/dashboard/HeaderBar";
import ProfileAvatar from "@/components/dashboard/ProfileAvatar";
import Balance from "@/components/dashboard/Balance";
import CategoriesList from "@/components/dashboard/CategoriesList";
import { sizes } from "@/constants/Theme";

const Home = () => {
	return (
		<Container style={styles.container}>
			<HeaderBar>
				<Balance />
				<ProfileAvatar />
			</HeaderBar>
			<CategoriesList />
			{/* Categories */}
		</Container>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		gap: sizes.XL10,
	},
});
