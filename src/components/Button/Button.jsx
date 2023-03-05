import { StyledButton, Children } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({ children, onClick, textSize = '28px', style }) {
  return (
    <StyledButton onClick={onClick} style={style}>
      <Children textSize={textSize}>{children}</Children>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  textSize: PropTypes.string,
  style: PropTypes.object,
};
