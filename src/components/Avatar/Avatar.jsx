import { RxAvatar } from 'react-icons/rx';
import { vars } from 'constants/varialbles';
import { Border } from './Avatar.styled';
import PropTypes from 'prop-types';

export function Avatar({ size = '50px', color, border = false, style }) {
  const isBordered = border;

  return (
    <>
      {!isBordered ? (
        <RxAvatar
          size={size}
          color={color ? color : vars.accentColor}
          style={style}
        />
      ) : (
        <Border color={color ? color : vars.accentColor}>
          <RxAvatar
            size={size}
            color={color ? color : vars.accentColor}
            style={style}
          />
        </Border>
      )}
    </>
  );
}

Avatar.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool,
  style: PropTypes.object,
};
