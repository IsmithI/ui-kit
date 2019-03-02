import * as React from "react";
import { IHasChildren } from "../../interfaces";
import { Grid, IGrid, Item } from "../Grid";
import { styles } from "./Button.styles";
import { css } from "aphrodite/no-important";

export interface IButton extends IHasChildren, IGrid {
  onClick?: (event: React.SyntheticEvent) => void;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "disabled";
}

export const Button = ({ variant = "default", children, ...props }: IButton) => {
  const classes = css(styles.button, variant && styles[variant]);

  return (
    <div className={classes} onClick={props.onClick}>
      <Grid direction="row" wrap="nowrap" spacing="4px" {...props}>
        {React.Children.map(children, child => (
          <Item>{child}</Item>
        ))}
      </Grid>
    </div>
  );
};
