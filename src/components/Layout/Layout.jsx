import { Outlet } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { SideBar } from 'components/SideBar/SideBar';
import { Header, Container } from './Layout.styled';
import { useAuth } from 'hooks/useAuth';

export function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Logo />
        {isLoggedIn && <UserMenu />}
      </Header>
      <Container>
        <SideBar />
        <Outlet />
      </Container>
    </>
  );
}
