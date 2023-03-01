import { AppContainer } from './Container.styled';

export function Container({ children, width = '1280px' }) {
  return <AppContainer width={width}>{children}</AppContainer>;
}
