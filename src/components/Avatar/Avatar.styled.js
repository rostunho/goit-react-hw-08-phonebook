import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 4px solid ${props => props.color};
`;
