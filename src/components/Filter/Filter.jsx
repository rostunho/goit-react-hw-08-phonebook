import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/operations';

export function Filter() {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <input type="text" name="filter" onChange={handleFilter} />
    </>
  );
}
