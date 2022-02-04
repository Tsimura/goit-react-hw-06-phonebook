import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useLocalStorage from '../hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper, WorkingSpace } from './App.styled';
export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     toast.error(`${name} is already in contacts.`);
  //   } else {
  //     const contact = {
  //       id: shortid.generate(),
  //       name,
  //       number,
  //     };
  //     setContacts(prevContacts => [...prevContacts, contact]);
  //   }
  // };

  return (
    <AppWrapper>
      <WorkingSpace>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </WorkingSpace>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </AppWrapper>
  );
}
