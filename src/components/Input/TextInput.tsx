import * as React from "react";
import { Input } from "./Input";


interface IText {
	value?: string;
	onChange?: (e: React.SyntheticEvent) => void;
	onFocus?: (e: React.SyntheticEvent) => void;
	onBlur?: (e: React.SyntheticEvent) => void;
	className?: string;
	label?: string;
}

export const TextInput = ({...props}: IText) => (
	<Input type='text' {...props} />
);