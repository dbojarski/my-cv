import styled from 'styled-components';

import { Spacing } from '../../../assets/styles/Common.styles';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  margin-bottom: ${Spacing.s15};
`;

export const SkillsInformationHint = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

export const SkillsList = styled.div`
  display: grid;
  grid-gap: ${Spacing.s25};
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
