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

		setTitle('');
		setAuthor('');
	};

	const inputStyle = {
		backgroundColor : theme.bg,
		color           : theme.txt
	};

	const submitStyle = {
		backgroundColor : theme.txt,
		color           : theme.bg
	};

	return (
		<form
			onSubmit={clickedOnSubmitButton}
			className='add-book-form'
			style={{ background: theme.btn }}>
			<input
				type='text'
				name='title'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
				style={inputStyle}
			/>
			<input
				type='text'
				name='author'
				placeholder='Author'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				required
				style={inputStyle}
			/>
			<input type='submit' value='Add Book' style={submitStyle} />
		</form>
	);
};

export default AddBookForm;
