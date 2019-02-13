import { storiesOf } from "@storybook/react";
import { select, text } from '@storybook/addon-knobs';
import React from "react";
import { Input } from "./Input";

const stories = storiesOf("Components/Input", module);

stories.add('Text input', () => (
	<Input
		label={text('Label', 'Label')}
		value={text('Value', 'Some value in input')}
	/>
));