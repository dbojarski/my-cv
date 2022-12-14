import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectUser } from '../../store/user';

export function AuthGuard({ children }: PropsWithChildren) {
  const user = useSelector(selectUser);

  return <>{user ? children : <Navigate to='/authentication' />}</>;
}
