import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth'; // CLEAR LATER
import { Helmet } from 'react-helmet-async';
import { Heading } from 'components/Heading/Heading';
import { Description } from 'components/Description/Description';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

export function SignInPage() {
  const { isLoggedIn } = useAuth(); //CLEAR LATER
  const dispatch = useDispatch();

  const onLogIn = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  } // CLEAR LATER

  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <Heading text="LOG IN INTO YOUR APP" style={{ marginBottom: '8px' }} />
      <Description
        text="PLEASE ENTER YOUR EMAIL AND PASSWORD"
        style={{ marginBottom: '20px' }}
      />
      <form onSubmit={onLogIn} style={{ padding: '16px 177px' }}>
        <Input label="Email:" type="email" name="email" />
        <Input label="Password:" type="password" name="password" />

        <Button type="submit" style={{ marginTop: '40px' }}>
          Log In
        </Button>
      </form>
    </>
  );
}
