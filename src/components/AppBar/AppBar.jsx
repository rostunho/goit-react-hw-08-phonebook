import { Logo } from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

export function AppBar() {
  return (
    <>
      <Logo />
      <ThemeSwitcher />
      <AuthNav />
      <UserMenu />
    </>
  );
}
