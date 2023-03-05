import { PageHeading } from './Heading.styled';
import PropTypes from 'prop-types';

export function Heading({ text, style }) {
  return <PageHeading style={style}>{text}</PageHeading>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};
