import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const { removeBook } = useContext(BookContext);

	return (
		<li style={{ background: theme.btn }} key={book.id} onClick={() => removeBook(book.id)}>
			<div className='title'>{book.title}</div>
			<div className='author'>{book.author}</div>
		</li>
	);
};

export default BookDetails;
