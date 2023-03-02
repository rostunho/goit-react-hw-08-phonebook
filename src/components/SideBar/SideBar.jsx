import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { Filter } from 'components/Filter/Filter';
import { NaviLink } from 'components/NaviLink/NaviLink';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { SidebarContainer } from './SideBar.styled';

export function SideBar() {
  const { isLoggedIn } = useAuth();

  return (
    <SidebarContainer width="426px" style={{ margin: '0 4px 0 0' }}>
      <Navigation />
      {isLoggedIn && (
        <>
          <Filter style={{ marginBottom: '24px' }} />
          <NaviLink addButton to="contacts/new">
            + Add new contact
          </NaviLink>
        </>
      )}
      <ThemeSwitcher />
    </SidebarContainer>
  );
}
