import styled from 'styled-components';

import { Spacing } from '../../../assets/styles/Common.styles';

export const PersonalInformationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  margin-bottom: ${Spacing.s15};

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const PersonalInformationHint = styled.p`
  margin: 0;
`;

export const PersonalInfoFields = styled.div`
  display: grid;
  grid-gap: ${Spacing.s15};
  grid-template-columns: 1fr 1fr;
`;

export const AboutMe = styled.div`
  grid-column: 1 / -1;
`;
