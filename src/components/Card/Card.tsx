import * as React from 'react';
import cn from 'classnames';
import { IHasChildren } from "interfaces";

const styles = require('./Card.scss');

interface ICard extends IHasChildren {
	padding?: 'sm' | 'md' | 'lg';
	elevation?: 'none' | 'regular' | 'high' | 'highest';
	className?: string;
}

export const Card = ({ padding, className, children, elevation = 'regular' }: ICard) => {
	const paddingClass = padding && styles[`${padding}-padding`];
	const elevationClass = elevation && styles[`${elevation}-elevation`];
	const classes = cn(styles.card, paddingClass, className, elevationClass);

	return (
		<div className={classes}>
			{children}
		</div>
	);
};