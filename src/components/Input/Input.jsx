import { StyledLabel, StyledInput } from './Input.styled';

export function Input({
  label,
  type,
  name,
  pattern,
  title,
  required,
  defaultValue,
}) {
  return (
    <StyledLabel>
      {label}
      <StyledInput
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        defaultValue={defaultValue}
      />
    </StyledLabel>
  );
}
