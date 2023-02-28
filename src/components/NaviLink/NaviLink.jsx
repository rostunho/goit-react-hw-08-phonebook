import { StyledLink } from './NaviLink.styled';

export function NaviLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
