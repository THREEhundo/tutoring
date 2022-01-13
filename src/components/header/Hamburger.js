import React, { useState } from 'react';

const Hamburger = () => {
	const [openMenu, setMenu] = useState(false);

	const closedTopBar = '-translate-y-2';
	const openTopBar = '-translate-y-1 rotate-45 scale-y-125';
	const closedMiddleBar = 'opacity-100';
	const openMiddleBar = 'opacity-0 translate-x-3';
	const closedBottomBar = 'translate-y-2';
	const openBottomBar = '-translate-y-1 -rotate-45 scale-y-125';

	return (
		<button
			onClick={() => setMenu(!openMenu)}
			className={`w-12 h-12 flex items-center space-y-2 focus:outline-none`}>
			<div className={`w-12 flex items-center justify-center relative`}>
				<span
					className={`${
						openMenu === false ? closedTopBar : openTopBar
					} transform transition w-6 h-0.5 bg-teal absolute dark:bg-blue-oyster`}></span>
				<span
					className={`${
						openMenu === false ? closedMiddleBar : openMiddleBar
					} translate-x-3 transform transition w-6 h-0.5 bg-pale-orange absolute dark:bg-coral`}></span>

				<span
					className={`${
						openMenu === false ? closedBottomBar : openBottomBar
					} translate-y-2 transform transition w-6 h-0.5 bg-light-green absolute dark:bg-sunset`}></span>
			</div>
		</button>
	);
};

export default Hamburger;
