import { Link } from 'react-router-dom';

export function AuthNav() {
  return (
    <>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </>
  );
}
