import React from 'react';
import { useSelector } from 'react-redux';
import { removeContact } from 'redux/slice/slice';
import { useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
