import styled from 'styled-components';

import { MediaMaxSize, Spacing } from '../../assets/styles/Common.styles';

export const AddExperienceForm = styled.form`
  width: 700px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  background-color: #3f3f3f;
  padding: ${Spacing.s10};
  border-radius: 4px;

  textarea {
    min-height: 150px;
    resize: none;
  }
`;

export const AddExperienceDates = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${Spacing.s15};

  @media (max-width: ${MediaMaxSize.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const AddExperienceActions = styled.div`
  display: flex;
  gap: ${Spacing.s15};
  justify-content: flex-end;
`;
