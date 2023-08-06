// Core
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
// Components
import Container from "@/components/shared/Container";
import HeaderBar from "@/components/shared/HeaderBar";
import ProfileAvatar from "@/components/shared/ProfileAvatar";
import Balance from "@/components/shared/Balance";
import CategoriesList from "@/components/dashboard/Categories/CategoriesList";
import NFTCardsList from "@/components/dashboard/NFTCards/NFTCardsList";
import TrendingCollectionsList from "@/components/dashboard/TrendingCollections/TrendingCollectionsList";
// Theme & Images
import { colors, sizes } from "@/constants/Theme";
import avatarImage from "@/assets/images/avatar/avatar.webp";

const Home = () => {
	return (
		<ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
			<Container style={styles.container} mode="top-insets">
				<Container style={styles.container} mode="horizontal-insets">
					<HeaderBar>
						<Balance />
						<ProfileAvatar image={avatarImage} size={60} />
					</HeaderBar>
					<CategoriesList />
				</Container>
				<Container mode="left-insets">
					<NFTCardsList />
				</Container>
				<Container mode="horizontal-insets">
					<TrendingCollectionsList />
				</Container>
			</Container>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.dark,
	},
	container: {
		gap: sizes.XL8,
	},
});
