import React from "react";
import { Tabs } from "expo-router";
import CustomAppbar from "@/components/shared/CustomAppbar";
import { colors } from "@/constants/Theme";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
	const icons = {
		index: "home-outline",
		search: "search-outline",
		charts: "stats-chart-outline",
		profile: "person-outline",
	};
	return (
		<Tabs
			screenOptions={({ route }) => ({
				headerShown: false,
				header: (props) => <CustomAppbar {...props} />,
				tabBarStyle: {
					backgroundColor: colors.gray,
					borderTopWidth: 0,
				},
				tabBarShowLabel: false,
				tabBarIcon: ({ color, size }) => {
					return <Ionicons name={icons[route.name]} size={24} color={color} />;
				},
			})}>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="search" options={{ title: "Search" }} />
			<Tabs.Screen name="charts" options={{ title: "Charts" }} />
			<Tabs.Screen name="profile" options={{ title: "Profile" }} />
		</Tabs>
	);
};

export default _layout;
