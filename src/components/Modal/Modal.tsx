import * as React from 'react';
import { ReactNode } from 'react';
import { IHasChildren } from '../../interfaces';
import { Portal } from '../Utils';

const styles = require('./Modal.scss');

export interface IModal {
  isOpen?: boolean;
  overlay?: ReactNode;
}

export class Modal extends React.Component<IModal> {
  render() {
    const { isOpen = true, children, overlay } = this.props;

    return (
      <Portal>
        {isOpen && (
          <>
            {overlay}
            <ModalWrapper>{children}</ModalWrapper>
          </>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = ({ children }: IHasChildren) => <div className={styles.modal}>{children}</div>;
