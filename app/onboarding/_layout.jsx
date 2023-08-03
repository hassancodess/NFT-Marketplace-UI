import CustomAppbar from "@/components/shared/CustomAppbar";
import { Stack } from "expo-router";

const _layout = () => {
	return <Stack screenOptions={{ header: (props) => <CustomAppbar {...props} /> }} />;
};

export default _layout;
