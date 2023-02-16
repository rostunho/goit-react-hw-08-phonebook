import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectisLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectisLoading);

  return { user, isLoggedIn, isLoading };
};
