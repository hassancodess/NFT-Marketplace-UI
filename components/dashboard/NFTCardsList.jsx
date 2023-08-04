import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NFTCards } from "@/data/NFTCards";
import NFTCard from "@/components/dashboard/NFTCard";
import { sizes } from "@/constants/Theme";
import { FlatList } from "react-native-gesture-handler";

const renderItem = ({ item }) => {
	return <NFTCard item={item} />;
};

const NFTCardsList = () => {
	return (
		<View>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={NFTCards}
				keyExtractor={(item, index) => item.id}
				renderItem={renderItem}
				contentContainerStyle={{ gap: sizes.XL4 }}
			/>
		</View>
	);
};

export default NFTCardsList;

const styles = StyleSheet.create({});
