import React from 'react';

export const SingleColumn = ({ addClasses, children }) => {
	const additionalClasses = addClasses ? `${addClasses}` : ``;
	return <section className={`w-3/5 ${additionalClasses}`}>{children}</section>;
};
