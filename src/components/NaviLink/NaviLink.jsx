import { StyledLink, StyledAddButton } from './NaviLink.styled';

export function NaviLink({ to, addButton = false, children }) {
  return addButton ? (
    <StyledAddButton to={to}>{children}</StyledAddButton>
  ) : (
    <StyledLink to={to}>{children}</StyledLink>
  );
}
