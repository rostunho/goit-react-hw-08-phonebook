import { Header } from 'components/Layout/Layout.styled';
import { Logo } from 'components/Logo/Logo';
import { SidebarContainer } from 'components/SideBar/SideBar.styled';
import { MainContent } from 'components/Layout/Layout.styled';
import { Container } from 'components/Container/Container';

export function Skeleton() {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Container flex>
        <SidebarContainer width="426px" style={{ margin: '0 4px 0 0' }} />
        <MainContent />
      </Container>
    </>
  );
}
