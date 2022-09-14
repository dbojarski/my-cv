import styled from 'styled-components';

import { Spacing } from '../../../assets/styles/Common.styles';

export const PersonalInformationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  margin-bottom: ${Spacing.s15};

  input,
  textarea {
    width: 60%;
  }

  textarea {
    resize: vertical;
    min-height: 50px;
  }
`;

export const PersonalInformationHint = styled.p`
  margin: 0;
`;
