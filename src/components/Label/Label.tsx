import { LabelHTMLAttributes, memo } from 'react';

import { LabelContainer } from './Label.styles';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  text?: string;
};

export const Label = memo((props: LabelProps) => {
  return (
    <LabelContainer>
      <label {...props}>
        {props.text && <small>{props.text}</small>}
        {props.children}
      </label>
    </LabelContainer>
  );
});
