import { ADD_BOOK, REMOVE_BOOK } from '../actions/actionTypes';
import { v1 as uuid } from 'uuid';

export const bookReducer = (state, action) => {
	switch (action.type) {
		case ADD_BOOK:
			return [
				...state,
				{
					id     : uuid(),
					title  : action.book.title,
					author : action.book.author
				}
			];

		case REMOVE_BOOK:
			return state.filter((book) => book.id !== action.id);

		default:
			return state;
	}
};
