import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/shared/Container";
import HeaderBar from "@/components/dashboard/HeaderBar";
import ProfileAvatar from "@/components/dashboard/ProfileAvatar";
import Balance from "@/components/dashboard/Balance";
import CategoriesList from "@/components/dashboard/CategoriesList";
import NFTCardsList from "@/components/dashboard/NFTCardsList";
import TrendingCollectionsList from "@/components/dashboard/TrendingCollectionsList";
import { sizes } from "@/constants/Theme";
import avatarImage from "@/assets/images/avatar/avatar.webp";

const Home = () => {
	return (
		<Container style={styles.container}>
			<HeaderBar>
				<Balance />
				<ProfileAvatar image={avatarImage} size={60} />
			</HeaderBar>
			<CategoriesList />
			<NFTCardsList />
			<TrendingCollectionsList />
		</Container>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		gap: sizes.XL10,
	},
});
