import React from 'react';
import { ELearning } from './assets/index.js';

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

/**
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
function App() {
	return (
		<div className='bg-white dark:bg-midnight text-light-green dark:text-blue-oyster w-screen h-screen container px-4'>
			<Header />
		</div>
	);
}
const Header = () => {
	return (
		<header className='flex items-center justify-between px-8 h-24'>
			<HomeIcon />
			<Hamburger />
		</header>
	);
};

const HomeIcon = () => (
	<div className='rounded-full w-fit'>
		<img src={ELearning} alt='home-link' className='w-16 mx-auto' />
	</div>
);

const Hamburger = () => (
	<button className='flex items-center space-y-2 focus:outline-none'>
		<div className='w-6 flex items-center justify-center relative'>
			<span
				// x-bind:class="open ? 'translate-y-0 rotate-45' : '-translate-y-2'"
				className='-translate-y-2 transform transition w-full h-0.5 bg-teal absolute'></span>
			<span
				// x-bind:class="open ? 'opacity-0 translate-x-3' : 'opacity-100'"
				className='translate-x-3 transform transition w-full h-0.5 bg-pale-orange absolute'></span>

			<span
				// x-bind:class="open ? 'translate-y-0 -rotate-45' : 'translate-y-2'"
				className='translate-y-2 transform transition w-full h-0.5 bg-light-green absolute'></span>
		</div>
	</button>
);

export default App;
