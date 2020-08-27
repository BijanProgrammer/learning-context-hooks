import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import PageExpander from './components/PageExpander';

function App() {
	return (
		<div className='App'>
			<ThemeContextProvider>
				<AuthContextProvider>
					<BookContextProvider>
						<PageExpander>
							<Navbar />
							<BookList />
							<ThemeToggle />
						</PageExpander>
					</BookContextProvider>
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
