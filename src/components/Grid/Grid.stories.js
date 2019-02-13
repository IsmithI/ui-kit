import React from 'react';
import { storiesOf } from "@storybook/react";
import { Grid, Item } from "./Grid";
import { Card } from "../Card/Card";
import { select, text } from '@storybook/addon-knobs';
import { Typography } from "../Typography/Typography";

const stories = storiesOf("Components/Grid", module);

const justifyOptions = {
	Center: 'center',
	'Flex start': 'flex-start',
	'Flex end': 'flex-end',
	'Space around': 'space-around',
	'Space between': 'space-between',
	'Space evenly': 'space-evenly'
};
const alignItemsOptions = {
	Center: 'center',
	'Flex start': 'flex-start',
	'Flex-end': 'flex-end',
	Baseline: 'baseline',
	Stretch: 'stretch'
};
const wrapOptions = {
	Wrap: 'wrap',
	'No wrap': 'nowrap',
	'Wrap reverse': 'wrap-reverse'
};
const directionOptions = {
	Row: 'row',
	'Reverse row': 'row-reverse',
	Column: 'column',
	'Reverse column': 'column-reverse'
};

stories.add('Simple layout', () => (

	<Grid
		justify={select('Justify', justifyOptions)}
		alignItems={select('Align items', alignItemsOptions)}
		wrap={select('Wrap', wrapOptions)}
		spacing={text('Spacing', '1em')}
		direction={select('Direction', directionOptions)}>
		<Item>
			<Card>
				<Typography variant={"h3"}>A</Typography>
			</Card>
		</Item>
		<Item>
			<Card>
				<Typography variant={"h3"}>B</Typography>
			</Card>
		</Item>
		<Item>
			<Card>
				<Typography variant={"h3"}>C</Typography>
			</Card>
		</Item>
	</Grid>

));
