import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding: 2px 48px;

  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.headerBg};

  border: 4px solid ${vars.accentColor};
  border-radius: 8px;
  outline: none;

  &::placeholder {
    font-size: 19px;
  }
`;
