import React from "react";
import { DesktopContainer } from "../generic/DesktopContainer";
import { HugeHeading } from "../generic/HugeHeading";

export const Testimonials = () => {
	return (
		<>
			<FirstPage />
			<SecondPage />
		</>
	);
};

const FirstPage = () => (
	<DesktopContainer addClasses="flex flex-column flex-grow justify-center mx-auto">
		<HugeHeading addClasses="text-center w-full">Testimonials</HugeHeading>
		<img />
	</DesktopContainer>
);

/**
 * main container div rolls in from the left --> right
 * text in main container --> messages input bar apple iphone
 * iphone container expands upwards
 * top of iphone container shows group name 'students
 * shows profile roll in from left
 * shows profile roll in from right
 * shows profile roll in form left
 */
const SecondPage = () => (
	<section>
		<TextInputiPhone />
	</section>
);

const TextInputiPhone = () => (
	// Reverse column
	<section>
		<input type="text" />
		{/* placeholder up arrow */}
	</section>
);
