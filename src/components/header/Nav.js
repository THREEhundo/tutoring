import React, { cloneElement, useState } from 'react';
import Toggle from './ThemeToggle';
import Hamburger from './Hamburger';
import HomeIcon from './HomeIcon';

const navArray = [
	'About',
	'Calendar',
	'FAQ',
	'Process',
	'Testimonials',
	'Login',
];
// create 2 nav lists
const NavList = (openMenu) => {
	const navItems = navArray.map((item, index, openMenu) => (
		<li key={index} className='nav-item'>
			<a
				href={`#${item}`}
				className={
					'px-3 py-2 flex items-center uppercase font-black leading-snug hover:opacity-75 ' +
					(openMenu ? '' : '')
				}>
				{item}
			</a>
		</li>
	));

	return (
		<ul
			className={
				'flex flex-col lg:flex-row list-none lg:ml-auto justify-between dark:text-coral' +
				(openMenu ? ' flex flex-col' : '')
			}>
			{navItems}
		</ul>
	);
};
const Nav = () => {
	const [openMenu, setMenu] = useState(false);

	const handleClick = () => setMenu(!openMenu);

	// const Dropdown = NavLinks();
	const Dropdown = cloneElement(NavLinks);

	return (
		<header className='flex flex-wrap py-2'>
			<div className='w-full px-4'>
				<div className='relative flex items-center justify-between px-2 py-3'>
					<section className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
						<nav className='relative flex flex-grow content-center justify-between lg:w-auto px-4 lg:static lg:flex lg:justify-between'>
							<HomeIcon />
							<div className='flex flex-wrap lg:flex-nowrap content-center min-w-min justify-between'>
								<Toggle />
								<Hamburger openMenu={openMenu} handleClick={handleClick} />
								<NavLinks openMenu={openMenu} />
							</div>
						</nav>
					</section>
				</div>
			</div>
		</header>
	);
};

export default Nav;
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
 * full screen drop down animation use one of main colors bold
 * 2 second roll
 * keep other nav items visible
 * put in breaking div to put menu column onto a new row
 */

// Makes next flex item break into a new row.
const FlexBreakingInsert = () => (
	<div className='basis-full h-0 lg:hidden'></div>
);

const NavLinks = ({ openMenu }) => (
	<div
		className={
			'lg:flex flex-grow items-center w-full dark:bg-navy ' +
			(openMenu ? 'flex' : 'hidden')
		}>
		{NavList(openMenu)}
	</div>
);

{
	/* <li className='nav-item'>
				<a
					href='#about'
					className={
						'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ' +
						(openMenu ? '' : '')
					}>
					About
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#calendar'
					className={
						'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ' +
						(openMenu ? '' : '')
					}>
					Calendar
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#faq'
					className={
						'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ' +
						(openMenu ? '' : '')
					}>
					FAQ
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#process'
					className={
						'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ' +
						(openMenu ? '' : '')
					}>
					Process
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='#testimonals'
					className={
						'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ' +
						(openMenu ? '' : '')
					}>
					Testimonials
				</a>
			</li>
			<li className='nav-item'>
				<a
					href='signupLogin'
					className={
						'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ' +
						(openMenu ? '' : '')
					}>
					Sign Up / Login
				</a>
			</li> */
}
