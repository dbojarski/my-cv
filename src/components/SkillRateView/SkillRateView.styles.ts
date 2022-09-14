import styled from 'styled-components';

import { Colors, Spacing } from '../../assets/styles/Common.styles';

export const SkillRateViewContainer = styled.div`
  display: flex;
  gap: ${Spacing.s10};
`;

export const SkillRateViewBullet = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${Colors.gold1};
  border-radius: 50%;
`;
