import { StyledLabel, StyledInput } from './Input.styled';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};
