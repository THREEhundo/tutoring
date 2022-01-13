import React from 'react';
import Toggle from '../../color-theme/ThemeToggle';
import Hamburger from './Hamburger';
import HomeIcon from './HomeIcon';

const Header = () => {
	return (
		<header className='flex items-center justify-between px-8 h-24'>
			<HomeIcon />
			<div className='min-w-min flex content-center'>
				<Toggle />
				<Hamburger />
			</div>
		</header>
	);
};

export default Header;
