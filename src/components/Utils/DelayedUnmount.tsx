import * as React from "react";

interface IDelayedUnmount {
	time?: number;
	onEnd?: () => void;
}

export class DelayedUnmount extends React.Component<IDelayedUnmount> {

	state = {
		ended: false
	};

	timeout: any;

	render() {
		return !this.state.ended && this.props.children;
	}

	componentDidMount(): void {
		const { time = 500, onEnd } = this.props;
		this.timeout = setTimeout(() => {
				this.setState({ ended: true });
				if (onEnd) onEnd();
			},
			time
		);
	}

	componentWillUnmount(): void {
		if (this.timeout) clearTimeout(this.timeout);
	}

}