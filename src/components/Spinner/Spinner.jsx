import { Wrapper } from './Spinner.styled';
import { Bars } from 'react-loader-spinner';
import { vars } from 'constants/varialbles';

export function Spinner({ size }) {
  return (
    <Wrapper>
      <Bars
        color={vars.accentColor}
        height={size ? size : '80'}
        width={size ? size : '80'}
      />
    </Wrapper>
  );
}
