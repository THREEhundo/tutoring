import React from "react";

const Background = ({ children }) => (
  <div className="bg-pale-orange transition-all m-0 p-0">
    {/*<div className='bg-white dark:bg-midnight transition-all m-0 p-0 min-h-full'>*/}
    {children}
  </div>
);

export default Background;
