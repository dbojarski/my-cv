import styled from 'styled-components';

import { Spacing } from '../../assets/styles/Common.styles';

export const CVContainer = styled.div`
  display: flex;
  gap: ${Spacing.s15};
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
`;

export const PDFActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing.s15};
`;
