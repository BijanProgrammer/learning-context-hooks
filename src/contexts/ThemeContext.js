import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme : true,
		light        : {
			bg  : '#fde3a7',
			txt : '#424242',
			btn : '#fabe58'
		},
		dark         : {
			bg  : '#424242',
			txt : '#fde3a7',
			btn : '#232323'
		}
	};

	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};

	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
