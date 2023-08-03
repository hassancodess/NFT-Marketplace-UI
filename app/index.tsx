import React from "react";
import { Redirect, useRootNavigationState } from "expo-router";

const IndexPage = () => {
	const rootNavigationState = useRootNavigationState();

	if (!rootNavigationState?.key) return null;

	return <Redirect href={"/dashboard/"} />;
};

export default IndexPage;
