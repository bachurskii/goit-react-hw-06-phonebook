import React from 'react';
import ContactForm from './contactsForm/contactForm';
import ContactList from './contactList/contactLists';

const App = () => {
  return (
    <div>
      <h1>Contacts Book</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
