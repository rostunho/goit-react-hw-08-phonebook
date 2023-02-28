import styled from 'styled-components';

export const StyledButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  min-width: ${props => props.width || '30px'};
  background-color: ${props => props.color};
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
  }
`;

export const Children = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
`;
