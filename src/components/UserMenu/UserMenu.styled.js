import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  padding: 18px 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  line-height: 0.85;
  color: ${({ theme }) => theme.colors.primaryText};

  margin-left: 20px;
  margin-right: 20px;
`;

export const Button = styled.button`
  margin-left: 20px;
`;
