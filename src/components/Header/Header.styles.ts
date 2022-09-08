import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 30px;
  border-bottom: 1px solid #4f4f4f;
`;

export const Logo = styled.span`
  color: white;
  font-size: 3rem;
`;

export const Menu = styled.ul`
  list-style: none;
  margin-left: auto;

  li {
    display: inline;
  }

  li a {
    padding: 5px 10px;
    text-transform: uppercase;
    border-radius: 4px;

    &.active {
      background-color: #2f2f2f;
    }
  }
`;
