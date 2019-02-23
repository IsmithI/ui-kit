import * as React from 'react';
import cn from 'classnames';
import { IHasChildren } from "../../interfaces";
import { Grid, IGrid, Item } from "../Grid";

const styles = require('./Button.scss');

export interface IButton extends IHasChildren, IGrid {
	onClick?: (event: React.SyntheticEvent) => void;
	className?: string;
	variant?: 'default' | 'primary' | 'secondary' | 'disabled';
}

export const Button = ({ variant = 'default', children, ...props }: IButton) => {
	const classes = cn(styles.button, props.className, {
		[styles[variant]]: variant,
	});

	return (
		<div className={classes} onClick={props.onClick}>
			<Grid direction='row' wrap='nowrap' spacing='4px' {...props}>
				{React.Children.map(children, (child => (
					<Item>
						{child}
					</Item>
				)))}
			</Grid>
		</div>
	)
};