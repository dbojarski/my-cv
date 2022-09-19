import styled, { keyframes } from 'styled-components';

import { Spacing } from '../../assets/styles/Common.styles';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing.s15};

  &.spinner-left {
    margin-right: auto;
  }

  &.spinner-center {
    margin: 0 auto;
  }

  &.spinner-right {
    margin-left: auto;
  }
`;

export const SpinnerElement = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 5px solid #2f2f2f;
  border-top-color: #3f3f3f;
  position: relative;
  animation: ${rotate} 0.5s linear infinite;
`;
