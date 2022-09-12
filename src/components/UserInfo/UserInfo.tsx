import { User } from 'firebase/auth';

import {
  UserAvatar,
  UserDisplayName,
  UserInfoContainer,
} from './UserInfo.styles';

type UserInfoProps = Pick<User, 'displayName' | 'email' | 'photoURL'>;

export function UserInfo({ displayName, email, photoURL }: UserInfoProps) {
  return (
    <UserInfoContainer>
      {photoURL && <UserAvatar src={photoURL} alt='google avatar' />}
      <div>
        <UserDisplayName>{displayName}</UserDisplayName>
        <span>{email}</span>
      </div>
    </UserInfoContainer>
  );
}
