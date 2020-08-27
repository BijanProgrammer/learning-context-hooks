import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const PageExpander = (props) => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	return (
		<div className='page-expander' style={{ background: theme.bg }}>
			{props.children}
		</div>
	);
};

export default PageExpander;
