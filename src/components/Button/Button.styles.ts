import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { Colors } from '../../assets/styles/Common.styles';

export const CustomButton = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement> & { small?: boolean }
>`
  text-transform: uppercase;
  padding: 10px 20px;
  border: 0;
  outline: none;
  border-radius: 4px;

  ${({ small }) =>
    small
      ? {
          padding: '5px 10px',
          fontSize: '.8rem',
        }
      : ''}

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

export const GhostButton = styled(CustomButton)`
  background-color: transparent;
  color: #6f6f6f;

  &:not(:disabled):hover {
    background-color: transparent;
    color: ${Colors.gold2};
  }

  &:focus {
    background-color: transparent;
  }
`;
