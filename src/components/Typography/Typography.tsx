import * as React from "react";
import { IHasChildren } from "../../interfaces";
import { styles } from "./Typography.styles";
import { css } from "aphrodite/no-important";

interface ITypography extends IHasChildren {
  variant?: "normal" | "muted" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

export const Typography = ({ variant = "normal", children, onClick }: ITypography) => {
  const classes = css(styles.typography, variant && styles[variant]);
  return (
    <p className={classes} onClick={onClick}>
      {children}
    </p>
  );
};
