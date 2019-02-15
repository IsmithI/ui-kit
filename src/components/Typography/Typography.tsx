import * as React from 'react';
import { IHasChildren } from "interfaces";
import cn from 'classnames';

const styles = require('./Typography.scss');

interface ITypography extends IHasChildren {
	variant?: 'normal' | 'muted' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
	className?: string;
	onClick?: (e: React.SyntheticEvent) => void;
}

export const Typography = ({ variant = 'normal', children, className, onClick }: ITypography) => {
	const classes = cn(styles.typography, className, {
		[styles[variant]]: variant
	});
	return (
		<p className={classes} onClick={onClick}>{children}</p>
	)
};