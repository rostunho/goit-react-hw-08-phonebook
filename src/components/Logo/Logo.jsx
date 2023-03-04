import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { Icon } from './Icon';
import { PhonebookLogo, Label } from './Logo.styled';

export function Logo({ large, style, onClick }) {
  const themeIsDark = useSelector(selectCurrentTheme);

  return (
    <PhonebookLogo style={style} large={large} onClick={onClick}>
      <Icon
        width={large ? '428px' : '107px'}
        height={large ? '340px' : '85px'}
        color={themeIsDark ? '#fff' : '#4A4A4A'}
        style={{ cursor: 'pointer' }}
      />
      {!large && <Label>phonebook</Label>}
    </PhonebookLogo>
  );
}
