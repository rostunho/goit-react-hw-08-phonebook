import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  display: block;
  margin-right: 4px;
  padding: 48px;
  width: 426px;
  height: 564px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.appBg};
`;
