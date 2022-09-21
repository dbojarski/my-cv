import { User } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ProfileMenu } from '../../components/ProfileMenu/ProfileMenu';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { selectUser } from '../../store/user';
import { ProfileContainer } from './Profile.styles';

export default function Profile() {
  const { displayName, email, photoURL } = useSelector(selectUser) as User;

  return (
    <ProfileContainer>
      <UserInfo displayName={displayName} email={email} photoURL={photoURL} />
      <ProfileMenu />

      <Outlet />
    </ProfileContainer>
  );
}
