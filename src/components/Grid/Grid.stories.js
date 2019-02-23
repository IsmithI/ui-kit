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
		justify={select('Justify', justifyOptions, 'flex-start')}
		alignItems={select('Align items', alignItemsOptions, 'flex-start')}
		wrap={select('Wrap', wrapOptions, 'nowrap')}
		spacing={text('Spacing', '1em')}
		direction={select('Direction', directionOptions, 'row')}>
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

stories.add('Layout with breakpoint', () => (

	<Grid
		style={{ resize: 'both', overflow: 'auto' }}
		justify='space-evenly'
		alignItems='flex-start'
		wrap='nowrap'
		spacing={text('Spacing', '1em')}>
		<Item sm={6} md={4}>
			<Card>
				<Typography variant={"h3"}>A</Typography>
			</Card>
		</Item>
		<Item sm={6} md={5}>
			<Card>
				<Typography variant={"h3"}>B</Typography>
			</Card>
		</Item>
		<Item sm={0} md={3}>
			<Card>
				<Typography variant={"h3"}>C</Typography>
			</Card>
		</Item>
	</Grid>

));