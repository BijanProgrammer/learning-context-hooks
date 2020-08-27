import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const { books } = useContext(BookContext);

	return (
		<div className='book-list' style={{ background: theme.bg, color: theme.txt }}>
			{books.length ? (
				<ul>
					{books.map((book) => {
						return <BookDetails book={book} key={book.id} />;
					})}
				</ul>
			) : (
				<div className='empty' style={{ background: theme.bg, color: theme.txt }}>
					There is currently no book in the library
				</div>
			)}
		</div>
	);
};

export default BookList;
