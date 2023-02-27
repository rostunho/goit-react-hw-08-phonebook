import { Link } from 'react-router-dom';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { useAuth } from 'hooks/useAuth';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      <ThemeSwitcher />
    </>
  );
}
