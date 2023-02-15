import { Link } from 'react-router-dom';

export function AuthNav() {
  return (
    <>
      <p>AuthNav</p>
      <Link to="/">Home</Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </>
  );
}
