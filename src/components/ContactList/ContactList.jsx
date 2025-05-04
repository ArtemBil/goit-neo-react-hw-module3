import React from 'react';
import Contact from '../Contact';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        {...contact}
        deleteContact={deleteContact}
      ></Contact>
    ))}
  </ul>
);

export default ContactList;
