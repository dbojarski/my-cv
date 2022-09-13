import styled from 'styled-components';

import { Colors, Spacing } from '../../assets/styles/Common.styles';

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s10};

  input {
    max-width: 100%;
  }
`;

export const TextFieldError = styled.span`
  color: ${Colors.red1};
  font-size: 0.8rem;
`;
