import { Animation, IAnimation } from "../Animation";
import { IModal, Modal } from "./Modal";
import { IHasChildren } from "interfaces";
import * as React from "react";
import { DelayedUnmount } from "../Utils";
import { AnimatedMount } from "../Utils";

const styles = require('../../styles/utils.scss');
const modal = require('../Modal/Modal.scss');

interface IAnimatedModal extends IModal, IHasChildren {
	openAnimation: IAnimation;
	closeAnimation: IAnimation;
}

export const AnimatedModal = ({ isOpen = true, children, overlay = <Overlay isOpen={isOpen} />, closeAnimation, openAnimation }: IAnimatedModal) => {
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
		<DelayedUnmount time={(closeAnimation.duration || 0) + (closeAnimation.delay || 0)}>
			<Modal isOpen={true} overlay={overlay}>
				{content}
			</Modal>
		</DelayedUnmount>
	)
};

const open: IAnimation = {
	keyframe: 'fadeIn',
	duration: 500
};
const close: IAnimation = {
	keyframe: 'fadeOut',
	duration: 500
};

interface IOverlay {
	isOpen?: boolean;
}

const Overlay = ({ isOpen = true }: IOverlay) => (
	<AnimatedMount isOpen={isOpen} openAnimation={open} closeAnimation={close}>
		<div className={modal.overlay}/>
	</AnimatedMount>
);