import { RxAvatar } from 'react-icons/rx';
import { Border } from './Avatar.styled';
import { vars } from 'constants/varialbles';

export function Avatar({ size = '50px', color, border = false }) {
  const isBordered = border;

  return (
    <>
      {!isBordered ? (
        <RxAvatar size={size} color={color ? color : vars.accentColor} />
      ) : (
        <Border color={color ? color : vars.accentColor}>
          <RxAvatar size={size} color={color ? color : vars.accentColor} />
        </Border>
      )}
    </>
  );
}
