import styled from 'styled-components';

import { MediaMaxSize, Spacing } from '../../assets/styles/Common.styles';

export const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 30px;
  border-bottom: 1px solid #4f4f4f;

  @media (max-width: ${MediaMaxSize.mobile}) {
    flex-direction: column;
    justify-content: center;
    padding: ${Spacing.s15} 0;
    gap: ${Spacing.s15} 0;
    height: auto;
  }
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

  li a,
  li span {
    padding: 5px 15px;
    text-transform: uppercase;
    border-radius: 4px;

    &.active {
      background-color: #2f2f2f;
    }
  }

  @media (max-width: ${MediaMaxSize.mobile}) {
    margin: 0 auto;
  }
`;
