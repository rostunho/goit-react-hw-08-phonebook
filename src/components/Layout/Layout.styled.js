import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */

  width: 100%;
  height: 122px;
  margin-top: 4px;
  margin-bottom: 4px;
  /* padding: 0 48px; */
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.headerBg};

  background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.headerBg} 48px,
      transparent 48px,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.headerBg} 40%,
      ${vars.accentColor} 40%,
      ${vars.accentColor} 60%,
      ${({ theme }) => theme.colors.headerBg} 60%
    );
`;

export const Container = styled.div`
  display: flex;
`;
