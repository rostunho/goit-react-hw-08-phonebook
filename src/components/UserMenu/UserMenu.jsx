import { useDispatch } from 'react-redux';
import { RxAvatar } from 'react-icons/rx';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Menu, Name } from './UserMenu.styled';
import { vars } from 'constants/varialbles';
import { Button } from 'components/Button/Button';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Menu>
      <RxAvatar size="50px" color={vars.accentColor} />
      <Name>{user.name}</Name>
      <Button
        type="button"
        onClick={onLogOut}
        textSize="16px"
        style={{ height: '24px', minWidth: '100px', borderRadius: 0 }}
      >
        Log out
      </Button>
    </Menu>
  );
}
