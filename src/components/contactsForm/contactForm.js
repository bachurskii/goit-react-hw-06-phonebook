import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/slice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phone === phone
    );
    if (isDuplicate) {
      setError('Contact with this name or phone number already exists.');
      return;
    }

    dispatch(addContact({ id: Date.now(), name, phone }));
    setName('');
    setPhone('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <input
        type="text"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Enter a phone number"
      />
      <button type="submit">Add Contact</button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default ContactForm;
