import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../color-theme/ThemeContext';

const Toggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className='transition duration-500 ease-in-out rounded-full'>
			{theme === 'dark' ? (
				<FaSun
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					className='hover:animate-spin text-gray-500 dark:text-gray-400 text-2xl cursor-pointer fill-khaki'
				/>
			) : (
				<FaMoon
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className='hover:fill-yellow-400  mr-10text-gray-500 dark:text-gray-400 text-2xl cursor-pointer fill-sunset
					stroke-midnight stroke-10'
				/>
			)}
		</div>
	);
};

export default Toggle;
