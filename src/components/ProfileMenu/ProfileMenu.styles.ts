import styled from 'styled-components';

export const ProfileMenuList = styled.ul`
  list-style: none;
  border-bottom: 1px solid #2f2f2f;
`;

export const ProfileMenuItem = styled.li`
  display: inline-block;

  a {
    display: block;
    padding: 10px 15px;

    &.active {
      background-color: #2f2f2f;
    }
  }
`;
