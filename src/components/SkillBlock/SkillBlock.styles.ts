import styled, { css } from 'styled-components';

import { ReactComponent as EditIcon } from '../../assets/images/pen-solid.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/trash-can-arrow-up-solid.svg';
import { Spacing } from '../../assets/styles/Common.styles';

export const SkillBlockContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  border-radius: 4px;
  background-color: #2f2f2f;
  padding: 10px;
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

export const SkillEditIcon = styled(EditIcon)`
  ${SkillIcon};
`;

export const SkillDeleteIcon = styled(DeleteIcon)`
  ${SkillIcon};
`;

export const SkillIconsContainer = styled.div`
  display: flex;
  gap: ${Spacing.s10};
  margin-left: ${Spacing.s20};
`;

export const SkillBlockHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
