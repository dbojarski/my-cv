import styled from 'styled-components';

import { Spacing } from '../../assets/styles/Common.styles';

export const AddSkillContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  border-radius: 4px;
  background-color: #2f2f2f;
  padding: 10px;
  width: 200px;
`;

export const AddSkillActions = styled.div`
  display: flex;
  gap: ${Spacing.s15};
  border-top: 1px solid #3f3f3f;
  padding-top: ${Spacing.s15};
  justify-content: flex-end;
`;
