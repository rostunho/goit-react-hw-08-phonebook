import { PageDescription } from './Description.styled';

export function Description({ text, style }) {
  return <PageDescription style={style}>{text}</PageDescription>;
}
