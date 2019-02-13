import * as React from 'react';
import cn from 'classnames';
import { Icon, IIcon } from "../Icon/Icon";

const styles = require('./Button.scss');

export interface IButton {
	label?: string;
	onClick?: (event: React.SyntheticEvent) => void;
	className?: string;
	variant?: 'default' | 'primary' | 'secondary' | 'disabled';
	icon?: IIcon;
}

export const Button = ({ variant = 'default', icon, ...props }: IButton) => {
	const classes = cn(styles.button, props.className, {
		[styles[variant]]: variant,
	});

	return (
		<div className={classes} onClick={props.onClick}>
			{icon && <Icon {...icon}/>}
			<div className={styles.label}>{props.label}</div>
		</div>
	)
};