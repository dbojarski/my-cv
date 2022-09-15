import { NavLink } from 'react-router-dom';

import { Pages } from '../../constants/routes.constants';
import { ProfileMenuList, ProfileMenuItem } from './ProfileMenu.styles';

export function ProfileMenu() {
  return (
    <ProfileMenuList>
      <ProfileMenuItem>
        <NavLink to={Pages.profile}>Personal information</NavLink>
      </ProfileMenuItem>

      <ProfileMenuItem>
        <NavLink to={Pages.profileSkills}>Skills</NavLink>
      </ProfileMenuItem>

      <ProfileMenuItem>
        <NavLink to={Pages.profileExperience}>Experience</NavLink>
      </ProfileMenuItem>
    </ProfileMenuList>
  );
}
