import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/shared/Container";
import { colors, sizes } from "@/constants/Theme";
import Swiper from "react-native-swiper";
import RoundedButton from "@/components/onboarding/RoundedButton";
// Screens
import Onboarding1 from "@/components/onboarding/Onboarding1";
import Onboarding2 from "@/components/onboarding/Onboarding2";
import Onboarding3 from "@/components/onboarding/Onboarding3";
import { useRouter } from "expo-router";

const Onboarding = () => {
	const router = useRouter();
	const onboardingRef = useRef(null);
	const slideIndex = useRef(0);

	const handleIndexChanged = (index) => {
		slideIndex.current = index;
	};

	const goToNextSlide = () => {
		if (slideIndex.current < 2) {
			if (onboardingRef.current) {
				onboardingRef.current.scrollBy(1);
			}
		} else {
			router.replace("/onboarding/start");
		}
	};
	return (
		<Container mode="top-insets" style={styles.container}>
			<Swiper
				style={styles.wrapper}
				activeDotColor={colors.white}
				ref={onboardingRef}
				loop={false}
				onIndexChanged={handleIndexChanged}>
				<Onboarding1 />
				<Onboarding2 />
				<Onboarding3 />
			</Swiper>
			<View style={styles.bottomContainer}>
				<RoundedButton onPress={goToNextSlide}>Next</RoundedButton>
			</View>
		</Container>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
	},
	wrapper: {},
	bottomContainer: {
		backgroundColor: colors.gray,
		paddingTop: sizes.XL6,
		paddingBottom: sizes.XL10,
		alignItems: "center",
		paddingHorizontal: sizes.XL3,
		// position: "absolute",
	},
});
