import * as React from 'react';
import cn from 'classnames';
import { Typography } from "../Typography/Typography";

const styles = require('./Input.scss');

export interface IInput {
	value?: string;
	onChange?: (e: React.SyntheticEvent) => void;
	onFocus?: (e: React.SyntheticEvent) => void;
	onBlur?: (e: React.SyntheticEvent) => void;
	className?: string;
	type?: 'text' | 'number' | string;
	label?: string;
}

export class Input extends React.Component<IInput> {

	state = {
		focused: false
	};

	input: HTMLInputElement | null = null;

	render() {
		const { focused } = this.state;
		const { className, value, label, ...props } = this.props;
		const classes = cn(styles.wrapper, className && styles[className]);

		return (
			<div className={classes}>
				<input ref={input => this.input = input} {...props} className={styles.input} value={value} onFocus={this.onFocus} onBlur={this.onBlur}/>
				{label && <Label text={label} minimized={!!value || focused} onClick={this.focusByLabelClick}/>}
			</div>
		);
	}

	onFocus = (e: React.SyntheticEvent) => {
		this.setState({ focused: true });
		if (this.props.onFocus) this.props.onFocus(e);
	};

	onBlur = (e: React.SyntheticEvent) => {
		this.setState({ focused: false });
		if (this.props.onBlur) this.props.onBlur(e);
	};

	focusByLabelClick = (e: React.SyntheticEvent) => {
		if (!this.state.focused || !this.props.value) {
			this.onFocus(e);
			if (this.input) this.input.focus();
		}
		else {
			e.stopPropagation();
		}
	}
}

interface ILabel {
	text?: string;
	minimized?: boolean;
	onClick?: (e: React.SyntheticEvent) => void;
}

const Label = ({ text, minimized = false, onClick }: ILabel) => {
	const classes = cn(styles.label, {
		[styles.minimized]: minimized
	});

	return (
		<Typography className={classes} onClick={onClick}>{text}</Typography>
	)
};