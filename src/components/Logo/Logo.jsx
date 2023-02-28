import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { Icon } from './Icon';
import { PhonebookLogo, Label } from './Logo.styled';

export function Logo() {
  const themeIsDark = useSelector(selectCurrentTheme);

  return (
    <PhonebookLogo>
      <Icon width={107} height={85} color={themeIsDark ? '#fff' : '#000'} />
      <Label>phonebook</Label>
    </PhonebookLogo>
  );
}
