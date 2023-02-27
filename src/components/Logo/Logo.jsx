import { Icon } from './Icon';
import { PhonebookLogo, Label } from './Logo.styled';

export function Logo() {
  return (
    <PhonebookLogo>
      <Icon width={107} height={85} />
      <Label>phonebook</Label>
    </PhonebookLogo>
  );
}
