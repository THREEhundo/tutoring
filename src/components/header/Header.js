import React from 'react';
import { ReactComponent as BrainCircuit } from '../../assets/icons/brain-circuit.svg';
import Toggle from './ThemeToggle';

const navArray = ['Intro', 'Calendar', 'FAQ', 'Process', 'Testimonials'];
const tempNavArray = ['intro', 'who', 'what', 'calendar'];

export const Header = ({ color }) => {
	const LoginBtn = () => Button();
	console.log(color);
	const textColor = color ? color : 'text-coral';
	return (
		<header
			id='header'
			className={`uppercase ${textColor} flex py-3 justify-between items-center`}>
			<Logo />
			<MainNav />
			<LoginBtnThemeToggleContainer />
		</header>
	);
};

const LoginBtnThemeToggleContainer = () => {
	return (
		<div className='flex flex-nowrap items-center'>
			<Toggle />
			<Button />
		</div>
	);
};

const Logo = () => (
	<a href='#' className='ml-10'>
		<BrainCircuit className='w-16 h-16' />
	</a>
);

const MainNav = () => {
	const navItems = tempNavArray.map((item, index) => (
		<li key={index} className='px-3'>
			<a href=''>{item}</a>
		</li>
	));

	return <ul className='flex'>{navItems}</ul>;
};

const Button = () => (
	<button
		className='mr-10 ml-4 h-10 px-6 font-semibold bg-midnight text-coral rounded-3xl border-2 border-coral'
		type='submit'>
		Login
	</button>
);

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
