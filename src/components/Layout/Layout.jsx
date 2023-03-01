import { Outlet } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { SideBar } from 'components/SideBar/SideBar';
import { Header, Container, MainContent } from './Layout.styled';

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
        <MainContent>
          <Outlet />
        </MainContent>
      </Container>
    </>
  );
}
