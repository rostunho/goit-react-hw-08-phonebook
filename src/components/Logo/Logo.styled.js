import styled from 'styled-components';

export const PhonebookLogo = styled.div`
  position: relative;
  display: flex;
  width: 650px;
  padding: 18px 48px;
  border-radius: 8px;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const Label = styled.h1`
  display: inline-block;
  height: 74px;
  margin-left: 40px;

  font-size: 74px;
  line-height: 0.85;
  vertical-align: top;
  color: ${({ theme }) => theme.colors.primaryText};
`;
