import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BrainCircuit } from "../../assets/icons/brain-circuit.svg";
import { getNavLinks } from "../../data";
import Toggle from "./ThemeToggle";
// ?
//const LogoGif = () => (
//  <div className="w-96">
//    <svg preserveAspectRatio="none" className="vL6BBg" viewBox="0 0 500 500">
//      <path
//        className="SQ2ADw"
//        d="M250,0C111.92881254230167,0 0,111.92881254230164 0,250C0,388.07118745769833 111.92881254230161,500 250,500C388.0711874576983,500 500,388.07118745769833 500,250C500,111.92881254230167 388.07118745769833,0 250,0"
//        fill="#f0ffa6"
//      ></path>
//    </svg>
//    <svg preserveAspectRatio="none" className="vL6BBg" viewBox="0 0 500 500">
//      <path
//        className="SQ2ADw"
//        d="M250,0C111.92881254230167,0 0,111.92881254230164 0,250C0,388.07118745769833 111.92881254230161,500 250,500C388.0711874576983,500 500,388.07118745769833 500,250C500,111.92881254230167 388.07118745769833,0 250,0"
//        fill="#f0ffa6"
//      ></path>
//    </svg>
//  </div>
//);
export const Header = ({ color }) => {
  const textColor = color ? color : "text-coral";
  return (
    <header
      id="header"
      className={`uppercase ${textColor} flex py-3 px-10 justify-between items-center`}
    >
      <Logo />
      <MainNav />
      <LoginBtnThemeToggleContainer />
      {/*<Outlet />*/}
    </header>
  );
};

const LoginBtnThemeToggleContainer = () => {
  return (
    <div className="flex flex-nowrap items-center gap-x-1">
      <ContactLink />
      <Toggle />
    </div>
  );
};

const Logo = () => (
  <a href="#home" className="pl-[6px] pr-10">
    <BrainCircuit className="w-16 h-16" />
  </a>
);

const MainNav = () => {
  const navItems = getNavLinks().map((item, index) => (
    <li key={item} className="px-3">
      <Link to={item === "intro" ? `/` : `/${item}`}>{item}</Link>
    </li>
  ));

  return <ul className="flex">{navItems}</ul>;
};

// TODO: Contact Link
const ContactLink = () => <a href="#contact">Contact</a>;

/***
 * ? hover -> change
 * ?				>- font color -<
 * ?				>- border color -<
 * ?				>- bg color -<
 * ?				>- expand border radius to full -<
 * ?				>- :before arrow animation in -<
 * ?				>- :before arrow animation out -<
 ***/

/**
 * Light Color Palette
 * teal #85CBCC
 * light_teal #A8DEE0
 * khaki #F9E2AE
 * pale_orange #FBC78D
 * light_green #A7D676
 *
 * Dark Color Palette
 *midnight #0B0742
 *navy #120C6E
 *blue_oyster #5E72EB
 *coral #FF9190
 *sunset #FDC094
 *
 */
