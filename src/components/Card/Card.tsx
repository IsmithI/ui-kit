import * as React from 'react';
import cn from 'classnames';
import { IHasChildren } from "interfaces";

const styles = require('./Card.scss');

interface ICard extends IHasChildren {
	padding?: 'sm' | 'md' | 'lg';
	className?: string;
}

export const Card = ({ padding, className, children }: ICard) => {
	const paddingClass = padding && styles[`${padding}-padding`];
	const classes = cn(styles.card, paddingClass, className);

	return (
		<div className={classes}>
			{children}
		</div>
	);
};