import styled from 'styled-components';

export const PhonebookLogo = styled.div`
  position: relative;
  display: flex;
  width: ${props => (props.large ? '428px' : '650px')};
  padding: ${props => (props.large ? '0' : '18px 48px')};
  border-radius: 8px;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.colors.appBg};
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
