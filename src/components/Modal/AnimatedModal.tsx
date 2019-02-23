import { Animation, IAnimation } from '../Animation';
import { IModal, Modal } from './Modal';
import { IHasChildren } from '../../interfaces';
import * as React from 'react';
import { DelayedUnmount } from '../Utils';
import { AnimatedMount } from '../Utils';

const styles = require('../../styles/utils.scss');
const modal = require('../Modal/Modal.scss');

interface IAnimatedModal extends IModal, IHasChildren {
  openAnimation: IAnimation;
  closeAnimation: IAnimation;
}

export class AnimatedModal extends React.Component<IAnimatedModal, any> {
  constructor(props: IAnimatedModal) {
    super(props);
    this.state = {
      firstMount: !props.isOpen,
    };
  }

  render() {
    const { firstMount } = this.state;
    const { isOpen, openAnimation, closeAnimation, overlay = <Overlay isOpen={isOpen} />, children } = this.props;
    const props = isOpen ? { ...openAnimation } : { ...closeAnimation };
    const content = (
      <Animation {...props} className={styles.fullSize}>
        {children}
      </Animation>
    );

    return isOpen ? (
      <Modal isOpen={true} overlay={overlay}>
        {content}
      </Modal>
    ) : (
      !firstMount && (
        <DelayedUnmount time={(closeAnimation.duration || 0) + (closeAnimation.delay || 0)}>
          <Modal isOpen={true} overlay={overlay}>
            {content}
          </Modal>
        </DelayedUnmount>
      )
    );
  }

  componentDidUpdate(prevProps: Readonly<IAnimatedModal>, prevState: Readonly<any>, snapshot?: any): void {
    if (prevProps.isOpen !== this.props.isOpen) this.setState({ firstMount: false });
  }
}

const open: IAnimation = {
  keyframe: 'fadeIn',
  duration: 500,
};
const close: IAnimation = {
  keyframe: 'fadeOut',
  duration: 500,
};

interface IOverlay {
  isOpen?: boolean;
}

const Overlay = ({ isOpen = true }: IOverlay) => (
  <AnimatedMount isOpen={isOpen} openAnimation={open} closeAnimation={close}>
    <div className={modal.overlay} />
  </AnimatedMount>
);
