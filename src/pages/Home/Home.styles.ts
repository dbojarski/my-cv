import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const Meme = styled.img`
  padding: 20px;
  border: 1px dashed red;
  border-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;
