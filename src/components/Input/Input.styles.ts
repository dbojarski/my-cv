import styled from 'styled-components';

import { Colors, Spacing } from '../../assets/styles/Common.styles';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s10};
`;

export const InputError = styled.span`
  color: ${Colors.red1};
  font-size: 0.8rem;
`;
