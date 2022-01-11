import React from 'react';

const Background = ({ children }) => (
	<body className="bg-white dark:bg-midnight transition-all">
		{children}
	</body>
)

export default Background;