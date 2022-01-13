import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className='transition duration-500 ease-in-out rounded-full p-2'>
			{theme === 'dark' ? (
				<FaSun
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className='hover:animate-spin mr-5 text-gray-500 dark:text-gray-400 text-2xl cursor-pointer fill-khaki'
				/>
			) : (
				<FaMoon
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className='hover:fill-yellow-400 mr-5 text-gray-500 dark:text-gray-400 text-2xl cursor-pointer fill-sunset stroke-midnight stroke-10'
				/>
			)}
		</div>
	);
};

export default Toggle;
