import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const { books } = useContext(BookContext);

	return (
		<nav style={{ background: theme.btn, color: theme.txt }}>
			<h1>Context App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<h4>{books.length} books in Library</h4>
		</nav>
	);
};

export default Navbar;
