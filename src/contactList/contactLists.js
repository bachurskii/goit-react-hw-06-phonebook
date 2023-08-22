import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeContact } from 'slice/slice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
