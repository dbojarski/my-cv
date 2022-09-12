import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { setUser } from '../../store/user/user.reducer';
import { selectUser } from '../../store/user/user.selector';
import { signOutFromApp } from '../../utils/firebase/auth';
import { HeaderContainer, Logo, Menu } from './Header.styles';

export function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = async () => {
    await signOutFromApp();

    dispatch(setUser(null));
  };

  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo>generate your CV</Logo>
      </Link>

      <Menu>
        {user ? (
          <>
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
            <li>
              <span className='link' onClick={signOut}>
                Sign out
              </span>
            </li>
          </>
        ) : (
          <NavLink to='/authentication'>Sign In</NavLink>
        )}
      </Menu>
    </HeaderContainer>
  );
}
