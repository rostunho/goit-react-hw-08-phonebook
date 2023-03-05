import { AppContainer } from './Container.styled';
import PropTypes from 'prop-types';

export function Container({ children, width = '1280px', flex, style }) {
  return (
    <AppContainer width={width} flex={flex} style={style}>
      {children}
    </AppContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  flex: PropTypes.bool,
  style: PropTypes.object,
};
