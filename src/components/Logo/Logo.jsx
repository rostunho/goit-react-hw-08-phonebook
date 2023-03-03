import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { Icon } from './Icon';
import { PhonebookLogo, Label } from './Logo.styled';

export function Logo({ large, style }) {
  const themeIsDark = useSelector(selectCurrentTheme);

  return (
    <PhonebookLogo style={style} large={large}>
      <Icon
        width={large ? '428px' : '107px'}
        height={large ? '340px' : '85px'}
        color={themeIsDark ? '#fff' : '#000'}
      />
      {!large && <Label>phonebook</Label>}
    </PhonebookLogo>
  );
}
