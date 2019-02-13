import * as React from 'react';
import cn from 'classnames';

const styles = require('./Icon.scss');

export interface IIcon {
	src: string;
	alt?: string;
	variant?: 'default' | 'sm' | 'md' | 'lg';
}

export const Icon = ({ src, alt, variant = 'default', ...props }: IIcon) => {
	const classes = cn(styles.icon, {
		[styles[variant]]: variant
	});
	return (
		<span className={classes}>
			<img src={getIcon(src)} alt={alt || src}/>
		</span>
	);
};

function getIcon(src: string) {
	return `../icons/${src}.svg`;
}