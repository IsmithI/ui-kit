import * as React from "react";
import { RefObject } from "react";
import cn from "classnames";
import { IItem, Item } from "../Grid";

const styles = require("../../styles/animations.scss");

export interface IAnimation extends IItem {
	keyframe?: string;
	duration?: number;
	delay?: number;
	interpolation?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
	className?: string;
	animations?: {};
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
	style?: Object;
}

export class Animation extends React.Component<IAnimation> {

	listener: any;
	styles: any;
	state: {
		ended: boolean
	};
	element: RefObject<HTMLDivElement>;

	static defaultProps = {
		keyframe: 'fadeIn',
		duration: 500,
		interpolation: 'ease',
		delay: 0,
		direction: 'normal'
	};

	constructor(props: IAnimation) {
		super(props);
		this.state = { ended: !props.duration };
		this.styles = props.animations || styles;
		this.element = React.createRef();
	}

	componentDidMount(): void {
		if (this.element.current)
			this.listener = this.element.current.addEventListener('animationend', this.handleAnimationEnd);
	}

	render() {
		const { ended } = this.state;
		const { children, keyframe = 'fadeIn', duration, className, interpolation, delay, direction } = this.props;

		const classes = cn(ended ? this.styles[`${keyframe}-end`] : this.styles[`${keyframe}-start`], className);
		const style = {
			animation: `${this.styles[keyframe]} ${duration}ms ${interpolation} ${delay}ms 1 ${direction}`,
		};

		return (
			<Item {...this.props} style={this.props.style}>
				<div ref={this.element} style={style} className={classes}>
					{children}
				</div>
			</Item>
		)
	}

	componentWillUnmount(): void {
		if (this.listener && this.element.current) {
			this.element.current.removeEventListener('animationend', this.handleAnimationEnd);
		}
	}

	handleAnimationEnd = () => {
		this.setState({ ended: true });
	}

}