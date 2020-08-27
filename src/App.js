import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import PageExpander from './components/PageExpander';
import AddBookForm from './components/AddBookForm';

import './main.css';

function App() {
	return (
		<div className='App'>
			<ThemeContextProvider>
				<AuthContextProvider>
					<BookContextProvider>
						<PageExpander>
							<Navbar />
							<BookList />
							<AddBookForm />
						</PageExpander>
					</BookContextProvider>
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
