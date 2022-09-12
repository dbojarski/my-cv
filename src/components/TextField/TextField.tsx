import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FieldError } from 'react-hook-form';

import { TextFieldContainer, TextFieldError } from './TextField.styles';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
};

export const TextField = forwardRef(
  (props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
    return (
      <TextFieldContainer>
        <label>
          <input ref={ref} {...props} />
        </label>
        {props.error && <TextFieldError>{props.error.message}</TextFieldError>}
      </TextFieldContainer>
    );
  }
);
