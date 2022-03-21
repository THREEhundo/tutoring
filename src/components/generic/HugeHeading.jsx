import React from "react";

export const HugeHeading = ({ addClasses, children }) => {
  const additionalClasses = addClasses ? `${addClasses}` : ``;
  return (
    <h1
      className={`font-bold text-9xl font-['Red_Hat_Display'] ${additionalClasses}`}
    >
      {children}
    </h1>
  );
};
