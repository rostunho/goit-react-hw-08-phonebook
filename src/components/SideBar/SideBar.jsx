import { Navigation } from 'components/Navigation/Navigation';
import { Filter } from 'components/Filter/Filter';

// import { useAuth } from 'hooks/useAuth';
import { Container } from './SideBar.styled';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

export function SideBar() {
  return (
    <Container>
      <Navigation />
      <Filter />
      <ThemeSwitcher />
    </Container>
  );
}
