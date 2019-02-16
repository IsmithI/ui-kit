import React from 'react';
import { storiesOf } from "@storybook/react";
import { DelayedUnmount } from "./DelayedUnmount";
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { Typography } from "../Typography/Typography";
import { AnimatedMount } from "./AnimatedMount";
import { Grid, Item } from "../Grid/Grid";
import { Card } from "../Card/Card";
import { DeviceWidth } from "./DeviceWidth";

const stories = storiesOf('Components/Utils', module);

const openAnimation = {
	keyframe: 'fadeIn',
	duration: 1000
};
const closeAnimation = {
	keyframe: 'fadeOut',
	duration: 1000
};

stories.add('Delayed unmount', () => (
	<DelayedUnmount time={number('Disappear in (ms)', 2000)}>
		<Typography>
			{text('TextInput', 'Some content that will disappear')}
		</Typography>
	</DelayedUnmount>
));

stories.add('Animated mount', () => (
	<AnimatedMount closeAnimation={closeAnimation} openAnimation={openAnimation} isOpen={boolean('Open', true)}>
		<Grid>
			<Item cell={6}>
				<Card>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi deserunt dolorem eos fuga
						veritatis vero. Beatae consectetur cum ducimus eaque error obcaecati placeat quae qui, repellat similique
						totam vitae.
					</Typography>
				</Card>
			</Item>
		</Grid>
	</AnimatedMount>
));

const breakpoints = {
	xs: 'xs',
	sm: 'sm',
	md: 'md',
	lg: 'lg',
	xl: 'xl'
};

stories.add('Conditional view width', () => (
	<DeviceWidth breakOn={select('Breakpoint', breakpoints, 'sm')} hidden={boolean('Hidden', false)}>
		<Typography>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo id in minima pariatur quidem quod saepe
			sint tenetur velit? A amet corporis cumque dignissimos doloribus, rem similique sit vitae.
		</Typography>
	</DeviceWidth>
));