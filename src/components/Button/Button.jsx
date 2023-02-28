import { vars } from 'constants/varialbles';
import { StyledButton, Children } from './Button.styled';

export function Button({
  children,
  width = '20px',
  height = '20px',
  color = vars.accentColor,
  hoverColor = 'blue',
  textColor = '#fff',
  onClick,
}) {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      hoveColor={hoverColor}
    >
      <Children textColor={textColor}>{children}</Children>
    </StyledButton>
  );
}
