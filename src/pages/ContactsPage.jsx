import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilterValue } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Helmet } from 'react-helmet-async';
import { Contact } from 'components/Contact/Contact';

export function ContactsPage() {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      </ul>
    </>
  );
}
