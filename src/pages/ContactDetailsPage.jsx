import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
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

export default function ContactDetailsPage() {
  const { id, name, number } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (name.trim() === '' || number.trim() === '') {
      toast.info('Pleas fill in all fields');
      return;
    }
    dispatch(
      updateContact({
        id,
        name: name,
        number: number,
      })
    );

    navigate('/contacts');
  };

  return (
    <>
      <Helmet>
        <title>Edit Contact</title>
      </Helmet>
      <Heading text="EDIT CONTACT" style={{ marginBottom: '8px' }} />
      <Description
        text="CHANGE YOUR CONTACTS NAME OR PHONE"
        style={{ marginBottom: '20px' }}
      />
      <Container flex width="100%">
        <Avatar border color={vars.accentColor} size="300px" />
        <form
          onSubmit={handleUpdateContact}
          style={{ marginLeft: 'auto', paddingTop: '12px' }}
        >
          <Input
            label="Name:"
            type="text"
            name="name"
            defaultValue={name}
            pattern={validation.text.pattern}
            title={validation.text.title}
          />
          <Input
            label="Phone:"
            type="tel"
            name="number"
            defaultValue={number}
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
