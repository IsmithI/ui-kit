import React from 'react';
import { storiesOf } from "@storybook/react";
import { Typography } from "./Typography";
import { select, text } from '@storybook/addon-knobs';

const typographyVariants = {
	Normal: 'normal',
	Muted: 'muted',
	'Heading 6': 'h6',
	'Heading 5': 'h5',
	'Heading 4': 'h4',
	'Heading 3': 'h3',
	'Heading 2': 'h2',
	'Heading 1': 'h1',
};

const stories = storiesOf('Components/Typography', module);
stories.add('Text', (
	() => (
		<Typography
			variant={select('Variant', typographyVariants)}
			children={text('Text', "Some sample text")}
		/>
	))
);