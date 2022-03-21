const Hamburger = ({ openMenu, handleClick }) => {
  // triple bars
  //openMenu ? `absolute`
  const closedTopBar = "-translate-y-2 w-6 ";
  const closedMiddleBar = "opacity-100 w-6 ";
  const closedBottomBar = "translate-y-2 w-6";
  // x
  const openTopBar = "translate-y-0 rotate-45 w-7.5 bg-turquoise";
  const openMiddleBar = "opacity-0 translate-x-3 w-7.5";
  const openBottomBar = "translate-y-0 -rotate-45 w-7.5 bg-light-red";
  // lg:hidden
  return (
    <button
      onClick={handleClick}
      className={`w-12 h-8 flex items-center space-y-2 outline-none focus:outline-none z-20`}
    >
      <div className={`w-12 flex items-center justify-center`}>
        <span
          className={`${
            openMenu === false ? closedTopBar : openTopBar
          } transform transition h-0.5 bg-teal absolute bg-royal-purple`}
        ></span>
        <span
          className={`${
            openMenu === false ? closedMiddleBar : openMiddleBar
          } transform transition h-0.5 bg-seafoam absolute`}
        ></span>

        <span
          className={`${
            openMenu === false ? closedBottomBar : openBottomBar
          } translate-y-2 transform transition h-0.5 bg-sunset absolute`}
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;

const Hamburger2 = ({ openMenu, handleClick }) => {
  // const [openMenu, setMenu] = useState(false);
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
