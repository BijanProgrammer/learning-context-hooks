import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme : true,
		light        : {
			bg   : '#fde3a7',
			txt  : '#505050',
			btn  : '#fabe58',
			fade : '#707070'
		},
		dark         : {
			bg   : '#505050',
			txt  : '#fde3a7',
			btn  : '#232323',
			fade : '#707070'
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
