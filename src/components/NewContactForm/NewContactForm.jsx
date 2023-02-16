import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export function NewContactForm({ closeModal }) {
  const dispatch = useDispatch();

  const handleNewContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
    closeModal && closeModal();
  };

  return (
    <>
      <form onSubmit={handleNewContact}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        {/* CLEAR LATER */}
        <br />
        <label>
          Phone
          <input type="tel" name="number" />
        </label>
        {/* CLEAR LATER */}
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
