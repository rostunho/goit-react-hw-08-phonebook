import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const Nav = styled.nav`
  margin-bottom: 24px;
  background-image: linear-gradient(
    to right,

    ${vars.accentColor} 4px,
    ${({ theme }) => theme.colors.headerBg} 4px,
    ${({ theme }) => theme.colors.headerBg} 56px
  );
`;

export const List = styled.ul`
  display: block;
  list-style: none;
  /* overflow: hidden; */
  margin: 0 0 0 48px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  /* position: relative; */
  margin-bottom: 16px;
  /* margin-left: 32px; */
`;

//   &:hover::after {
//     content: '';
//     display: inline-block;
//     /* position: absolute;
//     right: 0; */
//     width: 100%;
//     height: 24px;
//     margin-left: 48px;
//     background-size: contain;
//     background-image: linear-gradient(
//       to bottom,
//       ${({ theme }) => theme.colors.headerBg} 40%,
//       ${vars.accentColor} 40%,
//       ${vars.accentColor} 60%,
//       ${({ theme }) => theme.colors.headerBg} 60%
//     );
//   }
