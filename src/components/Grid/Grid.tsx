import * as React from 'react';
import { IHasChildren } from "interfaces";

interface IGrid extends IItem, IHasChildren {
	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
	alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
	wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
	spacing?: string;
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	style?: {};
	expand?: boolean;
}

export const Grid = ({ children, justify, alignItems, wrap, flex, spacing, direction, expand, style }: IGrid) => {
	const styles: any = {
		display: 'flex',
		justifyContent: justify,
		alignItems: alignItems,
		flexWrap: wrap,
		flexDirection: direction,
		flex,
		...style
	};

	if (expand) {
		styles.height = '100%';
		styles.width = '100%';
	}

	return (
		<div style={styles}>
			{React.Children.map(children, ((child: any) => {
				if (child === null || (child.type.displayName !== 'Item' && child.type.displayName !== 'Grid')) {
					console.error("Grid child should be Grid or Item");
					return null;
				}
				return spacing ?
					React.cloneElement(child, {
						style: { margin: spacing, ...child.props.style }
					})
					:
					child;
			}))}
		</div>
	)
};

interface IItem extends IHasChildren {
	flex?: number;
	style?: Object;
	cell?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | false;
}

export const Item = ({ children, flex, style, cell }: IItem) => {
	const mergedStyle: any = {
		flex,
		...style
	};

	if (cell) mergedStyle.width = cell / 12 * 100 + '%';

	return <div style={mergedStyle}>{children}</div>;
};