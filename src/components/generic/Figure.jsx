import React from "react";
export const Figure = ({ image, sourceLink, altDescription, artist }) => (
  <figure className="relative w-1/2 text-khaki">
    <img className="h-3/4 m-auto" src={image} alt={altDescription} />
    <cite>
      <a href={sourceLink}>{artist}</a>
    </cite>
  </figure>
);
