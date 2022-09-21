import { memo, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { ModalContainer } from './Modal.styles';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal = memo(({ children }: PropsWithChildren) => {
  const modalBody = (
    <ModalContainer>
      <div>{children}</div>
    </ModalContainer>
  );

  return createPortal(modalBody, modalRoot);
});
