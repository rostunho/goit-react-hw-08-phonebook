import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { ContactList } from 'components/ContactList/ContactList';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { useAuth } from 'hooks/useAuth';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Logo />
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      <ThemeSwitcher />
    </>
  );
}
