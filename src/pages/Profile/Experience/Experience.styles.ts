import styled, { css } from 'styled-components';

import { ReactComponent as EditIcon } from '../../../assets/images/pen-solid.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/images/trash-can-arrow-up-solid.svg';
import {
  Colors,
  Container,
  Spacing,
} from '../../../assets/styles/Common.styles';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  margin-bottom: ${Spacing.s15};
`;

export const ExperienceInformationHint = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  gap: ${Spacing.s15};
`;

export const ExperienceDescription = styled.div``;

export const ExperienceDetails = styled(Container)`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #1f1f1f;
  height: fit-content;
  flex: 1;
  grid-gap: ${Spacing.s15};
`;

export const ExperienceListItem = styled(Container)`
  cursor: pointer;
  width: 300px;

  &.active {
    color: ${Colors.gold1};
  }

  &:not(:first-of-type) {
    margin-top: ${Spacing.s15};
  }

  &:not(.active):hover {
    color: ${Colors.gold2};
  }
`;

const SkillIcon = css`
  cursor: pointer;
  width: 12px;
  height: auto;
  margin-left: auto;
  opacity: 0.1;

  &:hover {
    opacity: 1;
  }
`;

export const ExperienceEditIcon = styled(EditIcon)`
  ${SkillIcon};
`;

export const ExperienceDeleteIcon = styled(DeleteIcon)`
  ${SkillIcon};
`;

export const ExperienceIconsContainer = styled.div`
  display: flex;
  gap: ${Spacing.s10};
  margin-left: ${Spacing.s20};
`;
