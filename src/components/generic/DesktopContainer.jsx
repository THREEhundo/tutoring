import React from 'react';

export const DesktopContainer = ({ addClasses, children }) => {
	const additionalClasses = addClasses ? `w-3/5 ${addClasses}` : `w-3/5`;
	return (
		<section data-desktop-container className={additionalClasses}>
			{children}
		</section>
	);
};
