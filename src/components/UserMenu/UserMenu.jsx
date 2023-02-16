import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>
        Wellcome,<b> {user.name}</b>
      </p>
      <button type="button" onClick={onLogOut}>
        Log out
      </button>
      {/* CLEAR LATER */}
      <hr />
    </>
  );
}
