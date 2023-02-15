import { Logo } from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { useAuth } from 'hooks/useAuth';

export function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Logo />
      <ThemeSwitcher />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
}
