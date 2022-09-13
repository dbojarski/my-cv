import { ButtonHTMLAttributes } from 'react';

import { CustomButton, GhostButton } from './Button.styles';

export const enum ButtonType {
  default,
  ghost,
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType;
  small?: boolean;
};

export function Button({ children, ...otherProps }: ButtonProps) {
  const ButtonComponent = {
    [ButtonType.default]: CustomButton,
    [ButtonType.ghost]: GhostButton,
  }[otherProps.buttonType || ButtonType.default];

  return <ButtonComponent {...otherProps}>{children}</ButtonComponent>;
}
