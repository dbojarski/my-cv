import { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...otherProps }: ButtonProps) {
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
