import React from 'react';
export const Figure = ({ image, sourceLink, altDescription, artist }) => (
	<figure>
		<img src={image} alt={altDescription} />
		<cite>
			<a href={sourceLink}>{artist}</a>
		</cite>
	</figure>
);
