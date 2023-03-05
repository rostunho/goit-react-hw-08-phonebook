import { PageDescription } from './Description.styled';
import PropTypes from 'prop-types';

export function Description({ text, style }) {
  return <PageDescription style={style}>{text}</PageDescription>;
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};
