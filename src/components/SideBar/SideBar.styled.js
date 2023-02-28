import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const Container = styled.div`
  display: block;
  margin-right: 4px;
  padding: 48px;
  width: 426px;
  height: 564px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.headerBg};

  /* background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.headerBg} 48px,
      transparent 48px,
      transparent 90%,
      ${({ theme }) => theme.colors.headerBg} 90%,
      ${({ theme }) => theme.colors.headerBg} 100%
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.headerBg} 48px,
      ${({ theme }) => theme.colors.accentGrey} 48px,
      ${({ theme }) => theme.colors.accentGrey} 56px,
      ${({ theme }) => theme.colors.headerBg} 56px
    ); */
`;
