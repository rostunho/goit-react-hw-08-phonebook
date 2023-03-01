import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-right: 4px;
  padding: 48px;
  width: 426px;
  height: 564px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.appBg};

  /* background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.appBg} 48px,
      transparent 48px,
      transparent 90%,
      ${({ theme }) => theme.colors.appBg} 90%,
      ${({ theme }) => theme.colors.appBg} 100%
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.appBg} 48px,
      ${({ theme }) => theme.colors.accentGrey} 48px,
      ${({ theme }) => theme.colors.accentGrey} 56px,
      ${({ theme }) => theme.colors.appBg} 56px
    ); */
`;
