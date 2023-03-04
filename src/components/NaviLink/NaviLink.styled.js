import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;

  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.primaryText};

  &.active {
    color: ${vars.accentColor};
  }
`;

export const StyledAddButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 2px 48px;

  width: 100%;
  height: 48px;

  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  background-color: ${vars.successGreen};
  border-radius: 8px;
`;
