export function Contact({ contact, handleRemove, handleUpdate }) {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button
        type="button"
        onClick={() => handleUpdate(contact.id, contact.name, contact.number)}
      >
        Edit
      </button>
      <button type="button" onClick={() => handleRemove(contact.id)}>
        Remove
      </button>
    </>
  );
}
