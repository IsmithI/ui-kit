import { storiesOf } from "@storybook/react";
import { select, text, number } from '@storybook/addon-knobs';
import React from "react";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";

const stories = storiesOf("Components/Input", module);

stories.add('TextInput', () => (
	<TextInput
		label={text('Label', 'Label')}
		value={text('Value', 'Some value in input')}
	/>
));

stories.add('NumberInput', () => (
	<NumberInput
		label={text('Label', 'Label')}
		value={number('Value', 12)}
		onChange={value => console.log(value)}
	/>
));