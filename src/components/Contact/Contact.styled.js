import styled from 'styled-components';
import { vars } from 'constants/varialbles';
import { MdRemove, MdEdit } from 'react-icons/md';

export const ContactBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px 0 220px;
  overflow: hidden;

  height: 96px;
  border: 2px solid ${({ theme }) => theme.colors.outsideBg};
  border-radius: 8px;
`;

export const Name = styled.p`
  margin: 0 0 2px 0;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Phone = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Controls = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const ControlItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.controlsGrey};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.delete ? vars.dangerRed : vars.accentColor};
  }
`;

export const RemoveIcon = styled(MdRemove)`
  color: ${({ theme }) => theme.colors.appBg};
`;

export const EditIcon = styled(MdEdit)`
  color: ${({ theme }) => theme.colors.appBg};
`;
