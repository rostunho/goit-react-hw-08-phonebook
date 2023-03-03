import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilterValue } from 'redux/filter/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export function ContactList({ toggleModal }) {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilterValue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <List>
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
    </List>
  );
}
