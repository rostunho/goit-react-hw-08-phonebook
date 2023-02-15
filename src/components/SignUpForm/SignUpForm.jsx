import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

export function SignUpForm() {
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
      <form onSubmit={onSignUp}>
        <label>
          <input type="text" name="name" />
        </label>
        <label>
          <input type="email" name="email" />
        </label>
        <label>
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
