import { Animation, IAnimation } from "../Animation";
import { IHasChildren } from "../../interfaces";
import * as React from "react";
import { DelayedUnmount } from "./DelayedUnmount";

export interface IAnimatedMount extends IHasChildren {
  openAnimation: IAnimation;
  closeAnimation: IAnimation;
  isOpen?: boolean;
}

export const AnimatedMount = ({ isOpen = true, children, closeAnimation, openAnimation }: IAnimatedMount) => {
  const props = isOpen ? { ...openAnimation } : { ...closeAnimation };

  return isOpen ? (
    <Animation {...props}>{children}</Animation>
  ) : (
    <DelayedUnmount time={(closeAnimation.duration || 0) + (closeAnimation.delay || 0)}>
      <Animation {...props}>{children}</Animation>
    </DelayedUnmount>
  );
};
