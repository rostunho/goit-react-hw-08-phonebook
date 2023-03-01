import styled from 'styled-components';

export const PageHeading = styled.h2`
  font-family: 'Roboto';
  font-size: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;
