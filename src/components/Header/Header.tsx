import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useMatch } from 'react-router-dom';

import { Pages } from '../../constants/routes.constants';
import { signOutStart, selectUser } from '../../store/user';
import { HeaderContainer, Logo, Menu } from './Header.styles';

export function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => dispatch(signOutStart());
  const profileMatches = useMatch({ path: Pages.profile, end: false });

  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo>generate your CV</Logo>
      </Link>

      <Menu>
        {user ? (
          <>
            <li>
              <NavLink
                to={Pages.profile}
                className={profileMatches ? 'active' : ''}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <span className='link' onClick={signOut}>
                Sign out
              </span>
            </li>
          </>
        ) : (
          <NavLink to={Pages.authentication}>Sign In</NavLink>
        )}
      </Menu>
    </HeaderContainer>
  );
}
