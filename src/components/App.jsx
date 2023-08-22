import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import ContactForm from 'contactsForm/contactForm';
import ContactList from 'contactList/contactLists';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Contacts Book</h1>
          <ContactForm />

          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
