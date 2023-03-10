import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/operations';
import { SearchInput } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ style }) {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <SearchInput
        type="text"
        name="filter"
        onChange={handleFilter}
        placeholder="FIND CONTACT BY NAME"
        style={style}
      />
    </>
  );
}

Filter.propTypes = {
  style: PropTypes.object,
};
