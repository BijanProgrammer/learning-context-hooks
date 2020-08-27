import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const AddBookForm = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const { addBook } = useContext(BookContext);

	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');

	const clickedOnSubmitButton = (e) => {
		e.preventDefault();
		addBook(title, author);
	};

	return (
		<form
			onSubmit={clickedOnSubmitButton}
			className='add-book-form'
			style={{ background: theme.btn }}>
			<input
				type='text'
				title='title'
				placeholder='Title ...'
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<input
				type='text'
				title='author'
				placeholder='Author ...'
				onChange={(e) => setAuthor(e.target.value)}
				required
			/>
			<input type='submit' value='Add Book' />
		</form>
	);
};

export default AddBookForm;
