import styled from 'styled-components';

export const PageDescription = styled.h2`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
