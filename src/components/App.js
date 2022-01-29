import { useState, useEffect } from 'react';
import shortid from 'shortid';
import toast, { Toaster } from 'react-hot-toast';
import useLocalStorage from '../hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper, WorkingSpace } from './App.styled';
export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };
  const deleteContact = inputNameValue => {
    setContacts(contacts.filter(({ id }) => id !== inputNameValue));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };
  return (
    <AppWrapper>
      <WorkingSpace>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <h3>Your Phonebook is empty!</h3>
        )}
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
