import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilterValue } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Helmet } from 'react-helmet-async';
import { Contact } from 'components/Contact/Contact';

import { useLocation } from 'react-router-dom';

export default function ContactsPage() {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilterValue);
  const location = useLocation();
  const listEndRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (location?.state?.from !== '/contacts/new') {
      return;
    }

    listEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, [contacts, location]);

  const handleUpdate = (id, name, number) => {
    navigate(`/contacts/${id}/${name}/${number}`);
  };

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ul>
        {visibleContacts !== [] &&
          visibleContacts.map(contact => (
            <li key={contact.id}>
              <Contact
                contact={contact}
                handleUpdate={handleUpdate}
                handleRemove={handleRemove}
              />
            </li>
          ))}
        <div ref={listEndRef} />
      </ul>
    </>
  );
}
