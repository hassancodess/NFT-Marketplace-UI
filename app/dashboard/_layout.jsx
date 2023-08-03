import React from "react";
import { Stack } from "expo-router";
import CustomAppbar from "@/components/shared/CustomAppbar";

const _layout = () => {
	return <Stack screenOptions={{ header: (props) => <CustomAppbar {...props} /> }} />;
};

export default _layout;
