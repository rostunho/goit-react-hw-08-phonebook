import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';

export function ContactDetails() {
  const { id, name, number } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      updateContact({
        id,
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    navigate('/contacts');
  };

  return (
    <>
      <form onSubmit={handleUpdateContact}>
        <label>
          <input type="text" name="name" defaultValue={name} />
        </label>
        <label>
          <input type="tel" name="number" defaultValue={number} />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
