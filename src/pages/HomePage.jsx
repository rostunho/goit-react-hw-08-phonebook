import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { Logo } from 'components/Logo/Logo';
import { Heading } from 'components/Heading/Heading';
import { Description } from 'components/Description/Description';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Helmet>
        <title>phonebook</title>
      </Helmet>
      <Logo large style={{ margin: '0 auto' }} />
      <Heading
        text="WELLCOME TO YOUR PERSONAL PHONEBOOK"
        style={{ marginTop: '32px' }}
      />
      {!isLoggedIn && (
        <Description text="PLEASE LOG IN OR CREATE NEW ACCOUNT ON THE SIDEBAR" />
      )}
    </>
  );
}
