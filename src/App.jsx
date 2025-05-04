import { useState } from 'react';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import { v4 as uuid4 } from 'uuid';
import Notification from './components/Notification/Notification.jsx';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));

      return savedContacts ? savedContacts : initialContacts;
    } catch (e) {
      console.error(e);
      return initialContacts;
    }
  });
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const searchContact = (event) => {
    const value = event.target.value;
    const filter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredContacts(filter);
  };

  const submitContactForm = async (data) => {
    const id = uuid4();
    const updatedContacts = [...contacts, { id, ...data }];

    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (id) => () => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitContactForm={submitContactForm} />
      <SearchBox searchContact={searchContact} />
      {filteredContacts.length ? (
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
