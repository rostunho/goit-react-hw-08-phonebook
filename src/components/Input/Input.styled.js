import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 16px;

  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const StyledInput = styled.input`
  display: block;
  width: 400px;
  height: 48px;
  margin-top: 8px;
  padding: 2px 24px;

  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.appBg};

  border: 2px solid
    ${({ theme, defaultValue }) =>
      defaultValue ? vars.accentColor : theme.colors.borderGrey};
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.smoothBlue};
  }

  &::placeholder {
    font-size: 19px;
  }
`;
