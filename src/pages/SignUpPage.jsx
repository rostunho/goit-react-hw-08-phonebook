import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { Heading } from 'components/Heading/Heading';
import { Description } from 'components/Description/Description';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

export default function SignUpPage() {
  const dispatch = useDispatch();

  const onSignUp = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      toast.info('Please fill in all fields');
      return;
    }

    dispatch(
      signUp({
        name: name,
        email: email,
        password: password,
      })
    );

    form.reset();
  };
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Heading text="REGISTRATION" style={{ marginBottom: '8px' }} />
      <Description
        text="PLEASE CREATE YOUR PERSONAL ACCOUNT"
        style={{ marginBottom: '20px' }}
      />

      <form onSubmit={onSignUp} style={{ padding: '0 177px' }}>
        <Input label="Name:" type="text" name="name" title="Enter Your name" />
        <Input
          label="Email:"
          type="email"
          name="email"
          title="Enter Your email"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          title="Create Your password (more than 6 characters)"
        />

        <Button type="submit" style={{ marginTop: '40px' }}>
          Register
        </Button>
      </form>
    </>
  );
}
