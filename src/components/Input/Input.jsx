import { StyledLabel, StyledInput } from './Input.styled';

export function Input({ label, type, name, defaultValue }) {
  return (
    <StyledLabel>
      {label}
      <StyledInput type={type} name={name} defaultValue={defaultValue} />
    </StyledLabel>
  );
}
