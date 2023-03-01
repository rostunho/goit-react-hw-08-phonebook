import { PageHeading } from './Heading.styled';

export function Heading({ text, style }) {
  return <PageHeading style={style}>{text}</PageHeading>;
}
