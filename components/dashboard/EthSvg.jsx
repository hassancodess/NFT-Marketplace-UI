import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function EthSvg(props) {
	return (
		<Svg
			width={13}
			height={20}
			viewBox="0 0 13 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<G clipPath="url(#clip0_202_159)">
				<Path d="M6.498.5l-.13.442v12.814l.13.13 5.998-3.516L6.498.5z" fill="#C1CCF7" />
				<Path d="M6.498.5L.5 10.37l5.998 3.516V.5z" fill="#fff" />
				<Path d="M6.498 15.012l-.074.09v4.564l.074.214 6.002-8.382-6.002 3.514z" fill="#C1CCF7" />
				<Path d="M6.498 19.88v-4.868L.5 11.498l5.998 8.382z" fill="#fff" />
				<Path d="M6.498 13.886l5.998-3.516-5.998-2.704v6.22z" fill="#8198EE" />
				<Path d="M.5 10.37l5.998 3.516v-6.22L.5 10.37z" fill="#C1CCF7" />
			</G>
			<Defs>
				<ClipPath id="clip0_202_159">
					<Path fill="#fff" transform="translate(.5 .5)" d="M0 0H12V19.3846H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default EthSvg;
