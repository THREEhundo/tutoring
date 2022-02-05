import React from 'react';
import Nav from './components/header/Nav';

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

/** 1/11/22
  * 1. Light & Dark Mode
  *   i.    tailwind config class -> dark 
  *   ii.   add dark theme to existing components
  *   iii.  
  * 2. Finish Header
  * 3. Prettier - format on save for React
  *   "[javascriptreact]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
  */
/** 1/12/22
 * 1. Add margin left to light/dark icons
 * 2. Refine Google Searches - be concise
 * 3. remove body styling and turn into a div instead that covers the whole document.
 * 4. Add animation to Dar/Light icons & Hamburger Menu
 * 	4.1.0 Use template literals to change className for events
 *	4.2.0 For animation to center translate scale y to center X
 * 	4.2.1 Increased width of span to retain size after animation
 * 	4.2.3 When using translate to animate return back to 0 to center spans
 * 5. NavBar
 *  5.1.0 Added UL that both opens for mobile & sets itself as nav links on large screens.
 *  5.1.1 Add animation to nav bar
 *  5.1.2
 */
function App() {
	return (
		<div className='bg-white dark:bg-midnight text-light-green dark:text-blue-oyster w-screen h-screen container px-1 m-auto'>
			<Nav />
		</div>
	);
}
export default App;
