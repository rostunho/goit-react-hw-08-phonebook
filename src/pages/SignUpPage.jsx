import { Heading } from 'components/Heading/Heading';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

export function SignUpPage() {
  const dispatch = useDispatch();

  const onSignUp = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <>
      <Heading text="REGISTRATION" style={{ marginBottom: '16px' }} />

      <form onSubmit={onSignUp} style={{ padding: '0 177px' }}>
        <Input label="Name:" type="text" name="name" />

        <Input label="Email:" type="email" name="email" />

        <Input label="Password" type="password" name="password" />

        <Button type="submit" style={{ marginTop: '40px' }}>
          Register
        </Button>
      </form>
    </>
  );
}
