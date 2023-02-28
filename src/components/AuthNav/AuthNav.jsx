import { Link } from 'react-router-dom';
import { NaviLink } from 'components/NaviLink/NaviLink';

export function AuthNav() {
  return (
    <>
      <NaviLink to="/register">Sign Up</NaviLink>
      <NaviLink to="/login">Log In</NaviLink>
    </>
  );
}
