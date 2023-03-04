import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { themeChange } from 'redux/theme/operations';
import { Track, Thumb, SunIcon, MoonIcon } from './ThemeSwitcher.styled';

export function ThemeSwitcher() {
  const themeIsDark = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    document.body.style.transition = 'all 0.25s linear';
    dispatch(themeChange(!themeIsDark));
  };

  return (
    <>
      <Track
        type="button"
        onClick={toggleTheme}
        title="Toggle Theme"
        style={{ marginTop: '200px' }}
      >
        <Thumb dark={themeIsDark}></Thumb>
        {themeIsDark ? <MoonIcon /> : <SunIcon />}
      </Track>
    </>
  );
}
