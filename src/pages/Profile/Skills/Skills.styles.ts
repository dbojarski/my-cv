import styled from 'styled-components';

import { Spacing } from '../../../assets/styles/Common.styles';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  margin-bottom: ${Spacing.s15};
`;

export const SkillsInformationHint = styled.p`
  margin: 0;
`;

export const SkillsList = styled.div`
  display: flex;
  gap: ${Spacing.s15};
  flex-wrap: wrap;
`;
