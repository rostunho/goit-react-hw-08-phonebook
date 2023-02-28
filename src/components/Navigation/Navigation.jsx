import { useAuth } from 'hooks/useAuth';
import { NaviLink } from 'components/NaviLink/NaviLink';
import { Nav, List, Item } from './Navigation.styled';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <List>
        <Item>
          <NaviLink to="/">Home</NaviLink>
        </Item>
        {isLoggedIn ? (
          <Item>
            <NaviLink to="/contacts">Contacts</NaviLink>
          </Item>
        ) : (
          <>
            <Item>
              <NaviLink to="/register">Sign Up</NaviLink>
            </Item>
            <Item>
              <NaviLink to="/login">Log In</NaviLink>
            </Item>
          </>
        )}
      </List>
    </Nav>
  );
}
