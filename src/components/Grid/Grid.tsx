import * as React from 'react';
import { IHasChildren } from "interfaces";
import { breakpoints, getBreakpoint } from "../Utils/DeviceWidth";

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

type Breakpoints = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | false;

interface IItem extends IHasChildren {
	flex?: number;
	style?: Object;
	xs?: Breakpoints;
	sm?: Breakpoints;
	md?: Breakpoints;
	lg?: Breakpoints;
}

export class Item extends React.Component<IItem> {

	state: {
		breakpoint: any
	};

	constructor(props: IItem) {
		super(props);

		this.state = {
			breakpoint: getBreakpoint()
		}
	}

	componentDidMount(): void {
		window.addEventListener('resize', this.update);
	}

	update = () => {
		const breakpoint = getBreakpoint();
		if (this.state.breakpoint !== breakpoint) this.setState({ breakpoint });
	};

	render() {
		const { breakpoint } = this.state;
		const { children, flex, style, ...props } = this.props;
		const mergedStyle: any = {
			flex,
			...style
		};

		for (const b in props) {
			if (typeof breakpoints[b] !== "undefined" && (breakpoints[breakpoint] >= breakpoints[b])) {
				const calculatedWidth = props[b] / 12 * 100;

				if (!calculatedWidth && breakpoint === b) return null;

				mergedStyle.width = calculatedWidth + '%';
			}
		}

		return <div style={mergedStyle}>{children}</div>;
	}

	componentWillUnmount(): void {
		window.removeEventListener('resize', this.update);
	}
}