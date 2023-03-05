import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const Nav = styled.nav`
  margin-bottom: 24px;
  background-image: linear-gradient(
    to right,

    ${vars.accentColor} 4px,
    ${({ theme }) => theme.colors.appBg} 4px,
    ${({ theme }) => theme.colors.appBg} 56px
  );
`;

export const List = styled.ul`
  display: block;
  margin: 0 0 0 48px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
