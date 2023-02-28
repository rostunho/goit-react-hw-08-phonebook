import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';

export function ContactsPage() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <ContactList toggleModal={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <NewContactForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
}
