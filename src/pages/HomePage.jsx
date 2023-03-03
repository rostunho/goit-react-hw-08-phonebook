import { Logo } from 'components/Logo/Logo';
import { Heading } from 'components/Heading/Heading';
import { Description } from 'components/Description/Description';

export function HomePage() {
  // const themeIsDark = useSelector(selectCurrentTheme);
  return (
    <>
      <Logo large style={{ margin: '0 auto' }} />
      <Heading
        text="WELLCOME TO YOUR PERSONAL PHONEBOOK"
        style={{ marginTop: '32px' }}
      />
      <Description text="PLEASE LOG IN OR CREATE NEW ACCOUNT ON THE SIDEBAR" />
    </>
  );
}
