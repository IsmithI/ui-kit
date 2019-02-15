import * as React from 'react';
import cn from 'classnames';
const styles = require("../../styles/animations.scss");

export interface IAnimation {
	keyframe?: string;
	duration?: number;
	delay?: number;
	interpolation?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
	className?: string;
	animations?: {};
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
}

export class Animation extends React.Component<IAnimation> {

	timeout: any;
	styles: any;
	state: {
		ended: boolean
	};

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
	}

	componentDidMount(): void {
		const { duration, delay = 0 } = this.props;

		if (duration) {
			this.timeout = setTimeout(() => {
					this.setState({ ended: true });
				},
				duration + delay
			);
		}
	}

	render() {
		const { ended } = this.state;
		const { children, keyframe = 'fadeIn', duration, className, interpolation, delay, direction } = this.props;

		const classes = cn(ended ? this.styles[`${keyframe}-end`] : this.styles[`${keyframe}-start`], className);
		const style = {
			animation: `${this.styles[keyframe]} ${duration}ms ${interpolation} ${delay}ms 1 ${direction}`,
		};

		return (
			<div style={style} className={classes}>
				{children}
			</div>
		)
	}

	componentWillUnmount(): void {
		if (this.timeout) clearTimeout(this.timeout);
	}

}