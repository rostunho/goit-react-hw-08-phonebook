import { AppContainer } from './Container.styled';

export function Container({ children, width = '1280px', flex, style }) {
  return (
    <AppContainer width={width} flex={flex} style={style}>
      {children}
    </AppContainer>
  );
}
