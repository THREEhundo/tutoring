import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './color-theme/ThemeContext';
import Background from './color-theme/Background';
import Toggle from './color-theme/ThemeToggle';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<Background>
				<Toggle />
				<App />
			</Background>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
