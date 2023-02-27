import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Container/Container';

export function SideBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
    </Container>
  );
}
