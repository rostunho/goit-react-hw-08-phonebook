import { StyledLink, StyledAddButton } from './NaviLink.styled';
import PropTypes from 'prop-types';

export function NaviLink({ to, addButton = false, children }) {
  return addButton ? (
    <StyledAddButton to={to}>{children}</StyledAddButton>
  ) : (
    <StyledLink to={to}>{children}</StyledLink>
  );
}

NaviLink.propTypes = {
  to: PropTypes.string.isRequired,
  addButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
