import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { themeChange } from 'redux/theme/slice';

export function ThemeSwitcher() {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeChange(!currentTheme));
  };

  return (
    <>
      <button type="button" onClick={toggleTheme}>
        Change Theme
      </button>
    </>
  );
}
