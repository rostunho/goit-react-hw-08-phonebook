import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';
import { vars } from 'constants/varialbles';

export const Track = styled.button`
  position: absolute;
  bottom: 48px;
  left: 48px;
  display: block;
  margin: 0;
  padding: 0 8px 0 12px;

  width: 64px;
  height: 32px;

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
`;

export const SunIcon = styled(BsSun)`
  display: block;
  margin-left: auto;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const MoonIcon = styled(BsMoon)`
  display: block;
  width: 18px;
  margin-right: auto;
  height: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
`;
