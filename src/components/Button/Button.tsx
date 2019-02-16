import * as React from 'react';
import cn from 'classnames';
import { Icon, IIcon } from "../Icon";
import { IHasChildren } from "../../interfaces";

const styles = require('./Button.scss');

export interface IButton extends IHasChildren {
	onClick?: (event: React.SyntheticEvent) => void;
	className?: string;
	variant?: 'default' | 'primary' | 'secondary' | 'disabled';
	icon?: IIcon;
}

export const Button = ({ variant = 'default', icon, children, ...props }: IButton) => {
	const classes = cn(styles.button, props.className, {
		[styles[variant]]: variant,
	});

	return (
		<div className={classes} onClick={props.onClick}>
			{icon && <Icon {...icon}/>}
			<div className={styles.label}>
				{children}
			</div>
		</div>
	)
};