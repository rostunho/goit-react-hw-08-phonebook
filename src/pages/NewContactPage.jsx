import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { Heading } from 'components/Heading/Heading';
import { Description } from 'components/Description/Description';
import { Container } from 'components/Container/Container';
import { Avatar } from 'components/Avatar/Avatar';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { vars } from 'constants/varialbles';
import { validation } from 'constants/validation';

export default function NewContactPage({ closeModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (name.trim() === '' || number.trim === '') {
      toast.info('Please fill in all fields');
      return;
    }

    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );
    form.reset();
    navigate('/contacts', {
      replace: true,
      state: { from: '/contacts/new' },
    });
  };

  return (
    <>
      <Helmet>
        <title>New Contact</title>
      </Helmet>
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
          <Input
            label="Name:"
            type="text"
            name="name"
            pattern={validation.text.pattern}
            title={validation.text.title}
          />
          <Input
            label="Phone Number:"
            type="tel"
            name="number"
            pattern={validation.tel.pattern}
            title={validation.tel.title}
          />

          <Button type="submit" style={{ marginTop: '40px' }}>
            SAVE
          </Button>
        </form>
      </Container>
    </>
  );
}
