import styled from 'styled-components';

export const Meme = styled.img`
  padding: 20px;
  border: 1px dashed red;
  border-radius: 4px;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;
