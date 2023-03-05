import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Avatar } from 'components/Avatar/Avatar';
import { Button } from 'components/Button/Button';
import { Menu, Name } from './UserMenu.styled';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Menu>
      <Avatar size="50px" />
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
