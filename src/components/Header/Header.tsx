import { NavLink, Link } from 'react-router-dom';

import { HeaderContainer, Logo, Menu } from './Header.styles';

export function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo>generate your CV</Logo>
      </Link>

      <Menu>
        <li>
          <NavLink to='/authentication'>Sign In</NavLink>
        </li>
      </Menu>
    </HeaderContainer>
  );
}
