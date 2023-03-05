import styled from 'styled-components';
import { vars } from 'constants/varialbles';

export const StyledButton = styled.button`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;

  min-width: 240px;
  height: 48px;
  color: #fff;

  border: none;
  border-radius: 4px;
  background-color: ${vars.accentColor};
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
  }
`;

export const Children = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-size: ${props => props.textSize};
  color: ${props => props.textColor};
`;
