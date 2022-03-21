import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BrainCircuit } from "../../assets/icons/brain-circuit.svg";
import { getNavLinks } from "../../data";
import Hamburger from "./Hamburger";
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
export const Header = ({ color, openMenu, handleClick }) => {
  const textColor = color ? color : "text-coral";
  return (
    <header
      id="header"
      className={`uppercase ${textColor} flex py-3 px-10 justify-between items-center`}
    >
      {/*{openMenu ? <Logo className="invisible" /> : <Logo />}*/}
      <Logo />
      {/*<MainNav />*/}
      <LoginBtnThemeToggleContainer
        openMenu={openMenu}
        handleClick={handleClick}
      />
      {/*<Outlet />*/}
    </header>
  );
};

const LoginBtnThemeToggleContainer = ({ openMenu, handleClick }) => {
  return (
    <div className="flex flex-nowrap items-center gap-x-1">
      <Hamburger openMenu={openMenu} handleClick={handleClick} />
      {/*<ContactLink />*/}
      {/*<Toggle />*/}
    </div>
  );
};

const Logo = () => (
  <a href="#home" className="pl-[6px] pr-10">
    <BrainCircuit className="w-16 h-16" />
  </a>
);

//const MainNav = () => {
//  const navItems = getNavLinks().map((item) => (
//    <li key={item} className="px-3">
//      <Link to={item === "intro" ? `/` : `/${item}`}>{item}</Link>
//    </li>
//  ));
//
//  return <ul className="flex">{navItems}</ul>;
//};

// TODO: Contact Link
const ContactLink = ({ handleClick }) => (
  <Link
    to="/contact"
    className="text-5xl"
    //openMenu={openMenu}
    onClick={handleClick}
  >
    how to reach me
  </Link>
);

export const NavLinks = ({ openMenu, handleClick }) => (
  <div
    className={
      "font-['Italiana'] bg-pale-orange " +
      (openMenu ? "flex absolute top-0 left-0 z-10" : "hidden")
    }
  >
    {NavList(openMenu, handleClick)}
  </div>
);
const linkColorsArr = [
  "text-light-red",
  "text-royal-purple",
  "text-turquoise",
  "text-seafoam",
];
const NavList = (openMenu, handleClick) => {
  const navItems = getNavLinks().map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <Link
          to={item === "intro" ? `/` : `/${item}`}
          className={`px-3 py-2 flex items-center uppercase font-black text-5xl leading-snug hover:opacity-75 ${linkColorsArr[index]}`}
          onClick={handleClick}
        >
          {item}
        </Link>
      </li>
    );
  });
  //  lg:flex-row lg:ml-auto
  return (
    <ul
      className={
        "flex flex-col list-none justify-center items-start h-screen w-screen" +
        (openMenu ? " flex flex-col" : "")
      }
    >
      {navItems}
      <li className="px-3 py-2 uppercase font-black leading-snug hover:opacity-75 text-sunset">
        <ContactLink onClick={handleClick} />
      </li>
    </ul>
  );
};

const Hamburger2 = ({ handleClick, openMenu }) => {
  // const [openMenu, handleClick] = useState(false);
  // triple bars
  const closedTopBar = "-translate-y-2 w-6";
  const closedMiddleBar = "opacity-100 w-6";
  const closedBottomBar = "translate-y-2 w-6";
  // x
  const openTopBar = "translate-y-0 rotate-45 w-7.5";
  const openMiddleBar = "opacity-0 translate-x-3 w-7.5";
  const openBottomBar = "translate-y-0 -rotate-45 w-7.5";

  return (
    <button
      onClick={() => handleClick()}
      className={`lg:hidden w-12 flex items-center space-y-2 outline-none focus:outline-none`}
    >
      <div className={`w-12 flex items-center justify-center relative`}>
        <span
          className={`${
            openMenu === false ? closedTopBar : openTopBar
          } transform transition h-0.5 bg-teal absolute dark:bg-coral`}
        ></span>
        <span
          className={`${
            openMenu === false ? closedMiddleBar : openMiddleBar
          } transform transition h-0.5 bg-pale-orange absolute dark:bg-blue-oyster`}
        ></span>

        <span
          className={`${
            openMenu === false ? closedBottomBar : openBottomBar
          } translate-y-2 transform transition h-0.5 bg-light-green absolute dark:bg-sunset`}
        ></span>
      </div>
    </button>
  );
};
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
