import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Heading } from 'components/Heading/Heading';
import { Description } from 'components/Description/Description';
import { Container } from 'components/Container/Container';
import { Avatar } from 'components/Avatar/Avatar';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { vars } from 'constants/varialbles';

export function NewContactPage({ closeModal }) {
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
      <Heading text="CREATE CONTACT" style={{ marginBottom: '8px' }} />
      <Description
        text="PLEASE ADD NEW NAME AND PHONE NUMBER"
        style={{ marginBottom: '20px' }}
      />
      <Container flex width="100%">
        <Avatar border color={vars.darkGrey} size="300px" />
        <form
          onSubmit={handleNewContact}
          style={{ marginLeft: 'auto', paddingTop: '12px' }}
        >
          <Input label="Name:" type="text" name="name" />
          <Input label="Phone Number:" type="tel" name="number" />

          <Button type="submit" style={{ marginTop: '40px' }}>
            SAVE
          </Button>
        </form>
      </Container>
    </>
  );
}
