import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';
import { vars } from 'constants/varialbles';

export const Track = styled.button`
  position: absolute;
  bottom: 48px;
  left: 48px;
  display: block;
  width: 64px;
  height: 32px;

  padding: 0 8px 0 12px;
  margin: 0;

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.outsideBg};
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${props => (props.dark ? '32px' : 0)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${vars.accentColor};
  transition: left 0.25s linear;
  /* transform: translateX(120px); */
`;

export const SunIcon = styled(BsSun)`
  display: block;
  width: 20px;
  height: 20px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const MoonIcon = styled(BsMoon)`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.primaryText};
`;
