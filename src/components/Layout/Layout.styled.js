import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 122px;
  margin-top: 4px;
  margin-bottom: 4px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.appBg};

  background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.appBg} 48px,
      transparent 48px,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.appBg} 40%,
      ${vars.accentColor} 40%,
      ${vars.accentColor} 60%,
      ${({ theme }) => theme.colors.appBg} 60%
    );
`;

export const MainContent = styled.main`
  position: relative;
  display: block;
  /* align-items: center;
  justify-content: center; */

  width: 850px;
  height: 564px;
  padding: 48px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.appBg};

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.accentGrey};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    /* border-radius: 8px; */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${vars.accentColor};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    /* border-radius: 8px; */
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
