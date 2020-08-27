import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

import { REMOVE_BOOK } from '../actions/actionTypes';

const BookDetails = ({ book }) => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const { dispatch } = useContext(BookContext);

	return (
		<li
			style={{ background: theme.btn }}
			key={book.id}
			onClick={() => dispatch({ type: REMOVE_BOOK, id: book.id })}>
			<div className='title'>
				<span className='key'>Title :</span>
				<span className='value'>{book.title}</span>
			</div>
			<div className='author'>
				<span className='key'>Author :</span>
				<span className='value'>{book.author}</span>
			</div>
		</li>
	);
};

export default BookDetails;
