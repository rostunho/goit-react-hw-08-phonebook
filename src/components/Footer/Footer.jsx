import { StyledFooter, Text, Link } from './Footer.styled';
import PropTypes from 'prop-types';

export function Footer({ transparent }) {
  return (
    <>
      <StyledFooter transparent={transparent}>
        <Text>
          &#169; Created by
          <Link
            href="https://github.com/rostunho"
            target="_blank"
            rel="noreferrer"
          >
            Rostyk Podolets
          </Link>
          ,
          <Link href="https://goit.global/ua/" target="_blank" rel="noreferrer">
            GoIT
          </Link>
          Student in 2023
        </Text>
      </StyledFooter>
    </>
  );
}

Footer.propTypes = {
  transparent: PropTypes.bool,
};
