import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const StyledLink = styled(NavLink)`
  display: block;

  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.primaryText};

  &.active {
    color: ${vars.accentColor};
  }
`;
