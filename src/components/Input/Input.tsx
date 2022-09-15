import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FieldError } from 'react-hook-form';

import { Label } from '../Label/Label';
import { InputContainer, InputError } from './Input.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
  label?: string;
};

const InputNumber = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const exceptThisSymbols = ['e', 'E', '+', '-', '.'];

    return (
      <input
        type='number'
        ref={ref}
        {...props}
        onKeyDown={(e) =>
          exceptThisSymbols.includes(e.key) && e.preventDefault()
        }
      />
    );
  }
);

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <InputContainer>
        <Label text={props.label}>
          {props.type === 'number' ? (
            <InputNumber ref={ref} {...props} />
          ) : (
            <input ref={ref} {...props} />
          )}
        </Label>
        {props.error && <InputError>{props.error.message}</InputError>}
      </InputContainer>
    );
  }
);
