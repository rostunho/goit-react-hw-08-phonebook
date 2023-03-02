import styled from 'styled-components';

export const AppContainer = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
  width: ${props => props.width};
  margin: 0 auto;
`;
