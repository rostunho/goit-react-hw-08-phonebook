import { createPortal } from 'react-dom';
import { Backdrop, ContentBox } from './Modal.styled';

export function Modal({ children, onClose }) {
  const onBackdropClick = event => {
    if (event.target !== event.currentTarget) return;
    onClose();
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ContentBox>{children}</ContentBox>
    </Backdrop>,
    document.querySelector('#root-modal')
  );
}
