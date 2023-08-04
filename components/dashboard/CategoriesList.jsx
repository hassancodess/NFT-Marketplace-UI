import { FlatList, View } from "react-native";
import React from "react";
import CategoryButton from "./CategoryButton";
import { sizes } from "@/constants/Theme";

const categories = [
	{
		id: 1,
		value: "Trending",
		active: true,
	},
	{
		id: 2,
		value: "Art",
		active: false,
	},
	{
		id: 3,
		value: "Gaming",
		active: false,
	},
	{
		id: 4,
		value: "Social",
		active: false,
	},
];

const renderItem = ({ item }) => {
	return <CategoryButton active={item.active}>{item.value}</CategoryButton>;
};

const CategoriesList = () => {
	return (
		<View>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={categories}
				keyExtractor={(item, index) => item.id}
				renderItem={renderItem}
				contentContainerStyle={{ gap: sizes.XL4 }}
			/>
		</View>
	);
};

export default CategoriesList;
