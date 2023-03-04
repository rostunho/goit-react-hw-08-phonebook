import { Header } from 'components/Layout/Layout.styled';
import { Logo } from 'components/Logo/Logo';
import { SidebarContainer } from 'components/SideBar/SideBar.styled';
import { MainContent } from 'components/Layout/Layout.styled';
import { Container } from 'components/Container/Container';
import { Spinner } from 'components/Spinner/Spinner';

export function Skeleton() {
  return (
    <>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Container flex>
          <SidebarContainer width="426px" style={{ margin: '0 4px 0 0' }} />
          <MainContent>
            <Spinner />
          </MainContent>
        </Container>
      </Container>
    </>
  );
}
