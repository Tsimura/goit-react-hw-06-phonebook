import { combineReducers } from 'redux';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from './contacts-types';

// всі операції, видалити, фільтрувати тут!!!

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ items, filter });
