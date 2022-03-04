import React from "react";
import { HugeHeading } from "./HugeHeading";
import { SingleColumn } from "./SingleColumn";

export const GenericFirstScreenContent = ({
	children,
	page,
	hugeHeadingText,
	addClasses,
}) => {
	return (
		<main
			id={`${page}-landing`}
			className="flex flex-grow justify-center flex-col h-screen items-center">
			<SingleColumn
				addClasses={addClasses ? addClasses.singleColumnClasses : ""}>
				<HugeHeading>{hugeHeadingText}</HugeHeading>
				{children} {/* image or svg */}
			</SingleColumn>
		</main>
	);
};
