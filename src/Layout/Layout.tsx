import React, { ReactNode, useState } from 'react';

import '../sass/layout/Layout.scss';
import { ThemeContext } from '../context/ThemeContext';

interface LayoutProps {
	children: ReactNode
};

const Layout: React.FC<LayoutProps> = ({children}) => {
	const [theme, setTheme] = useState('light');

	console.log(`theme-${theme}`);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<main className={`theme--${theme}`} id='main'>
				{children}
			</main>
		</ThemeContext.Provider>
	)
}

export default Layout;