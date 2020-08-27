import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	return (
		<header style={{ background: theme.btn, color: theme.txt }}>
			<h1>Context App</h1>
			<nav>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
			<ThemeToggle />
		</header>
	);
};

export default Navbar;
