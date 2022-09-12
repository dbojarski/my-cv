import styled from 'styled-components';

import { Colors } from '../../assets/styles/Common.styles';

export const CustomButton = styled.button`
  text-transform: uppercase;
  padding: 10px 20px;
  border: 0;
  outline: none;
  border-radius: 4px;

  &:disabled {
    background-color: #4f4f4f;
    color: #929292;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled):hover {
    background-color: ${Colors.gold2};
  }

  &,
  &:focus {
    background-color: ${Colors.gold1};
  }
`;
