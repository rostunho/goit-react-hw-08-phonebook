import { useDispatch } from 'react-redux';
import { Avatar } from 'components/Avatar/Avatar';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Menu, Name } from './UserMenu.styled';
import { Button } from 'components/Button/Button';

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
