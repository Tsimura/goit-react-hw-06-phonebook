import shortid from 'shortid';
// import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from './contacts-types';

export const addContact = value => ({
  type: ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    ...value,
  },
});

export const deleteContact = inputNameValue => ({
  type: DELETE_CONTACT,
  payload: inputNameValue,
});

export const changeFilter = value => ({
  type: FILTER_CONTACTS,
  payload: value,
});

// ============= with tools
// const addContact = createAction(types.ADD_CONTAC, text => ({
//   payload: {
//     id: shortid.generate(),
//     text,
//     //   name,
//     //   number,
//   },
// }));

// const deleteContact = createAction(types.DELETE_CONTACT);

// const filterContact = createAction(types.FILTER_CONTACT);

// export default { addContact, deleteContact, filterContact };

// ====================================================
// const addContact = (name, number) => {
//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       toast.error(`${name} is already in contacts.`);
//     } else {
//       const contact = {
//         id: shortid.generate(),
//         name,
//         number,
//       };
//       setContacts(prevContacts => [...prevContacts, contact]);
//     }
//   };

//  const deleteContact = inputNameValue => {
//    setContacts(contacts.filter(({ id }) => id !== inputNameValue));
//  };
// const deleteContact = inputNameValue => {
//   setContacts(contacts.filter(({ id }) => id !== inputNameValue));
// };
// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
// const changeFilter = event => {
//   setFilter(event.currentTarget.value);
// };
