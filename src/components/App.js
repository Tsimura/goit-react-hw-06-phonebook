import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper, WorkingSpace } from './App.styled';
export default function App() {
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

//добавити container , розділити логіку + default index.js!!!
