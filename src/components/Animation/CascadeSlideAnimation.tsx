import * as React from "react";
import { IHasChildren } from "../../interfaces";
import { Animation, IAnimation } from "./Animation";
import { IItem } from "../Grid";

interface ICascadeSlideAnimation extends IAnimation, IHasChildren, IItem {}

export const CascadeSlideAnimation = ({ children, duration = 500, delay = 0, style }: ICascadeSlideAnimation) => {
  return React.Children.map(children, (child, index) => {
    return (
      <Animation keyframe="slideIn-right" delay={delay + (duration * index) / 10} style={style}>
        {child}
      </Animation>
    );
  });
};
