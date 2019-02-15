import React from 'react';
import { storiesOf } from "@storybook/react";
import { Animation } from "./Animation";
import { Typography } from "../Typography/Typography";
import { boolean } from '@storybook/addon-knobs'
import { DelayedUnmount } from "../Utils/DelayedUnmount";
import { Grid, Item } from "../Grid/Grid";
import { Card } from "../Card/Card";

const customAnimations = require('./customAnimations.scss');

storiesOf('Components/Animations', module)
	.add('Fade in', () => (
		<Animation keyframe='fadeIn'>
			<Typography>
				Fade in
			</Typography>
		</Animation>
	))
	.add('Fade out', () => (
		<Animation keyframe='fadeOut'>
			<Typography>
				Fade out
			</Typography>
		</Animation>
	))
	.add('Fade out and unmount', () => (
		<Grid>
			<Item>
				{boolean('Mounted', true) && (
					<DelayedUnmount time={1000}>
						<Animation keyframe='fadeOut' duration={1000}>
							<Typography>
								Fade out and unmount
							</Typography>
						</Animation>
					</DelayedUnmount>
				)}
			</Item>
		</Grid>
	))
	.add('Fade and slide', () => (
		<Animation keyframe='slideIn-right' duration={700}>
			<Animation keyframe='fadeIn' duration={700}>
				<Card>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur ea facilis nesciunt tempore!
						Accusantium at distinctio hic id incidunt itaque magni minima nemo quasi sapiente suscipit temporibus
						tenetur, unde!
					</Typography>
				</Card>
			</Animation>
		</Animation>
	))
	.add('Animation from custom sass file', () => (
		<Animation keyframe='customAnimation' animations={customAnimations}>
			<Card>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur ea facilis nesciunt tempore!
					Accusantium at distinctio hic id incidunt itaque magni minima nemo quasi sapiente suscipit temporibus
					tenetur, unde!
				</Typography>
			</Card>
		</Animation>
	));