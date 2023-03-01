import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { themeChange } from 'redux/theme/operations';

export function ThemeSwitcher() {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    document.body.style.transition = 'all 0.25s linear';
    dispatch(themeChange(!currentTheme));
  };

  return (
    <>
      <button type="button" onClick={toggleTheme} style={{ marginTop: '80px' }}>
        Change Theme
      </button>
    </>
  );
}
