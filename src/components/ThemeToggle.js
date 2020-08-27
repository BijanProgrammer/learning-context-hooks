import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
	return <button onClick={useContext(ThemeContext).toggleTheme}>Change Theme</button>;
};

export default ThemeToggle;
