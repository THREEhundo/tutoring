import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/JetBrains Mono/index.css';
import './index.css';
import App from './App';
import { ThemeProvider } from './color-theme/ThemeContext';
import Background from './color-theme/Background';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<Background>
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
