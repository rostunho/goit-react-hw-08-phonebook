import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 108px;
  margin-top: 4px;
  margin-bottom: 4px;

  border-radius: 8px;
  background-color: ${({ transparent, theme }) =>
    transparent ? 'transparent' : theme.colors.appBg};
`;

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: auto 48px auto auto;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Link = styled.a`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0 4px;
  color: ${vars.accentColor};
  text-decoration: none;
`;
