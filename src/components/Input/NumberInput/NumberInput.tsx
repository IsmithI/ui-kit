import * as React from 'react';
import { Input } from "../Input";
// import { Grid, Item } from "../../Grid";
// import { Button } from "../../Button";
// import cn from 'classnames';

const styles = require('./NumberInput.scss');

interface INumberInput {
	value: number;
	onChange?: (value: number) => void;
	onFocus?: (e: React.SyntheticEvent) => void;
	onBlur?: (e: React.SyntheticEvent) => void;
	className?: string;
	label?: string;
}

export const NumberInput = ({ onChange, value, ...props }: INumberInput) => (
	<div className={styles.numberInput}>
		<Input type='number' {...props} onChange={onChange} value={value}/>
		{/*<Buttons*/}
			{/*onAdd={() => onChange && onChange(value+1)}*/}
			{/*onReduce={() => onChange && onChange(value-1)}*/}
		{/*/>*/}
	</div>
);

// interface IButtons {
// 	onAdd: () => void;
// 	onReduce: () => void;
// }

// const Buttons = ({ onAdd, onReduce }: IButtons) => (
// 	<div className={styles.buttons}>
// 		<Grid direction='column'>
// 			<Item>
// 				<Button variant='primary' className={cn(styles.button, styles.top)} onClick={onAdd}>
// 					+
// 				</Button>
// 			</Item>
// 			<Item>
// 				<Button variant='primary' className={cn(styles.button, styles.bottom)} onClick={onReduce}>
// 					-
// 				</Button>
// 			</Item>
// 		</Grid>
// 	</div>
// );