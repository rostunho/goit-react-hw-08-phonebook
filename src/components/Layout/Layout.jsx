import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Logo } from 'components/Logo/Logo';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { SideBar } from 'components/SideBar/SideBar';
import { Container } from 'components/Container/Container';
import { Spinner } from 'components/Spinner/Spinner';
import { Header, MainContent } from './Layout.styled';

export function Layout() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Logo style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
        {isLoggedIn && <UserMenu />}
      </Header>
      <Container flex>
        <SideBar />
        <MainContent>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </MainContent>
      </Container>
    </>
  );
}
