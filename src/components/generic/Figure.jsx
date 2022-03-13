import React from "react";
export const Figure = ({ image, sourceLink, altDescription, artist }) => (
  <figure className="relative w-1/2 text-khaki">
    <img className="m-auto" src={image} alt={altDescription} />
    <cite>
      <a href={sourceLink}>{artist}</a>
    </cite>
  </figure>
);
