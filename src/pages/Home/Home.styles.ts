import styled from 'styled-components';

import { MediaMaxSize, Spacing } from '../../assets/styles/Common.styles';

export const HomeContainer = styled.div`
  display: grid;
  margin-bottom: ${Spacing.s15};
  align-items: start;
  grid-gap: ${Spacing.s25};
  grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr);

  @media (max-width: ${MediaMaxSize.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const CVActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
`;

export const CVWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.s15};
  min-height: calc(100vh - 135px);

  @media (min-width: ${MediaMaxSize.tablet}) {
    border-left: 1px solid #4f4f4f;
    padding-left: ${Spacing.s25};
  }
`;

export const CVButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
