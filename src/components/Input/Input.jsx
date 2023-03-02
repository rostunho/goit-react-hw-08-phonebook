import { StyledLabel, StyledInput } from './Input.styled';

export function Input({ label, type, name, initialValue }) {
  return (
    <StyledLabel>
      {label}
      <StyledInput type={type} name={name} initialValue={initialValue} />
    </StyledLabel>
  );
}
