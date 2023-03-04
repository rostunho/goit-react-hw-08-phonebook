import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { SideBar } from 'components/SideBar/SideBar';
import { Header, MainContent } from './Layout.styled';
import { Container } from 'components/Container/Container';

export function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Logo />
        {isLoggedIn && <UserMenu />}
      </Header>
      <Container flex>
        <SideBar />
        <MainContent>
          <Suspense fallback={<h1>... LOADING ...</h1>}>
            <Outlet />
          </Suspense>
        </MainContent>
      </Container>
    </>
  );
}
