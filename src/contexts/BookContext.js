import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ id: '1', title: 'Programming in C', author: 'Bijan' },
		{ id: '2', title: 'Java is Better', author: 'Reza' },
		{ id: '3', title: 'C# is The Best (?)', author: 'Ali' }
	]);

	const addBook = (title, author) => {
		setBooks([ ...books, { title, author, id: uuid() } ]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
