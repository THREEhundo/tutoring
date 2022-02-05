import React, { createContext, useEffect, useState } from 'react';

const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme');
		if (typeof storedPrefs === 'string') {
			if (storedPrefs === 'undefined') {
				return 'dark';
			}
			return storedPrefs;
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
		if (userMedia.matches) {
			return 'dark';
		}
	}
	return 'dark'; // light theme as the default;
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
	const { Provider } = ThemeContext;
	const [theme, setTheme] = useState(getInitialTheme);
	console.log(theme);
	console.log(initialTheme);

	const rawSetTheme = (rawTheme) => {
		const root = window.document.documentElement;
		const isDark = rawTheme === 'dark';

		root.classList.remove(isDark ? 'dark' : 'light');
		root.classList.add(rawTheme);

		localStorage.setItem('color-theme', rawTheme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	useEffect(() => rawSetTheme(theme), [theme]);

	return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};
