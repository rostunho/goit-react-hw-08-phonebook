import { StyledButton, Children } from './Button.styled';

export function Button({ children, onClick, textSize = '28px', style }) {
  return (
    <StyledButton onClick={onClick} style={style}>
      <Children textSize={textSize}>{children}</Children>
    </StyledButton>
  );
}
