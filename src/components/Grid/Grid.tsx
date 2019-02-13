import * as React from 'react';
import { IHasChildren } from "interfaces";

interface IGrid extends IItem, IHasChildren {
	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
	alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
	wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
	spacing?: string;
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const Grid = ({ children, justify, alignItems, wrap, flex, spacing, direction }: IGrid) => {
	const style = {
		display: 'flex',
		justifyContent: justify,
		alignItems: alignItems,
		flexWrap: wrap,
		flexDirection: direction,
		flex
	};

	return (
		<div style={style}>
			{React.Children.map(children, ((child: any) => {
				if (child === null || (child.type.displayName !== 'Item' && child.type.displayName !== 'Grid')) {
					console.error("Grid child should be Grid or Item");
					return null;
				}
				return spacing ?
					React.cloneElement(child, {
						style: { margin: spacing }
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
}

export const Item = ({ children, flex, style }: IItem) => {
	const mergedStyle = {
		flex,
		...style
	};
	return <div style={mergedStyle}>{children}</div>;
};