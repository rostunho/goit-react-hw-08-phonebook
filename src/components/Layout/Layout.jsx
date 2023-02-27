import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Logo } from 'components/Logo/Logo';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { SideBar } from 'components/SideBar/SideBar';
import { Header, Container } from './Layout.styled';

export function Layout() {
  const userIsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Logo />
        {userIsLoggedIn && <UserMenu />}
      </Header>
      <Container>
        <SideBar />
        <Outlet />
      </Container>
    </>
  );
}
