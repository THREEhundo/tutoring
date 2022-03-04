import React from 'react';

export const HugeHeading = ({ addClasses, children }) => {
	const additionalClasses = addClasses ? `${addClasses}` : ``;
	return (
		<h1 className={`font-bold text-9xl ${additionalClasses}`}>{children}</h1>
	);
};
