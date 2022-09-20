import styled from 'styled-components';

import { Spacing } from '../../assets/styles/Common.styles';

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s10};

  label small {
    background-color: #1f1f1f;
    border-radius: 4px 4px 0 0;
    padding: 5px 10px;
    display: inline-block;
  }
`;
