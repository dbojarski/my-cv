import styled from 'styled-components';

import { Colors, Spacing } from '../../assets/styles/Common.styles';

export const SkillRateContainer = styled.div`
  text-align: center;
`;

export const SkillRateBulletsContainer = styled.div`
  display: flex;
  flex-flow: row-reverse;
  width: 100%;
  margin-top: ${Spacing.s20};
`;

export const SkillRateBulletLabel = styled.label<{ active?: boolean }>`
  cursor: pointer;
  flex: 1;
  position: relative;

  &:after {
    content: '';
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #2f2f2f;
    border: 1px dashed transparent;
    display: block;
    transform: translateX(50%);
  }
`;

export const SkillRateBullet = styled.input.attrs({ type: 'radio' })`
  display: none;

  &:checked ~ label:after {
    background-color: ${Colors.gold1};
  }

  &:not(:disabled):hover ~ label:after {
    border-color: ${Colors.gold1};
  }
`;
