import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
// import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Contact } from 'components/Contact/Contact';

export function ContactList() {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log('Contacts: ', contacts);

  const handleUpdate = (id, name, number) => {
    navigate(`/contacts/${id}/${name}/${number}`);
  };

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>Contact List</h1>
      {/* <NewContactForm /> */}
      {contacts !== [] &&
        contacts.map(contact => (
          <li key={contact.id}>
            <Contact
              contact={contact}
              handleUpdate={handleUpdate}
              handleRemove={handleRemove}
            />
          </li>
        ))}
    </>
  );
}
