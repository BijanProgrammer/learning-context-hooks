import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import SunIcon from '../assets/svg/sun.svg';
import MoonIcon from '../assets/svg/moon.svg';

const ThemeToggle = () => {
	const { isLightTheme, toggleTheme } = useContext(ThemeContext);
	const icon = isLightTheme ? SunIcon : MoonIcon;

	return <img src={icon} alt='Theme status' className='theme-status' onClick={toggleTheme} />;
};

export default ThemeToggle;
