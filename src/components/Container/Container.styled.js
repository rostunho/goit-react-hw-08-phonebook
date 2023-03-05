import styled from 'styled-components';

export const AppContainer = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
  margin: 0 auto;
  width: ${props => props.width};
`;
