import { LabelHTMLAttributes } from 'react';

import { LabelContainer } from './Label.styles';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  text?: string;
};

export function Label(props: LabelProps) {
  return (
    <LabelContainer>
      <label {...props}>
        {props.text && <small>{props.text}</small>}
        {props.children}
      </label>
    </LabelContainer>
  );
}
