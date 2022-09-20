import styled from 'styled-components';

import { ReactComponent as ChevronDown } from '../../assets/images/chevron-down-solid.svg';
import { Colors, InputLook, Spacing } from '../../assets/styles/Common.styles';

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectList = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #2f2f2f;
  border-radius: 4px;
  margin-top: 10px;
  max-height: 250px;
  overflow-y: auto;
  z-index: 1;
`;

export const SelectListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 10px 20px;

  &.select-chosen {
    color: ${Colors.gold1};
  }

  &:not(.select-chosen):hover {
    color: ${Colors.gold2};
  }
`;

export const SelectInput = styled.div`
  ${InputLook};
  cursor: pointer;
  display: flex;
  gap: ${Spacing.s15};
  height: 41px;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ToggleIcon = styled(ChevronDown)`
  width: 15px;
  height: 15px;
  transform: rotate(0deg);
  transition: transform 0.2s;
  margin-left: auto;

  &.select-open {
    transform: rotate(180deg);
  }
`;
