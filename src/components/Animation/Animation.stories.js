import React from 'react';
import { storiesOf } from "@storybook/react";
import { Animation } from "./Animation";
import { Typography } from "../Typography/Typography";
import { boolean } from '@storybook/addon-knobs'
import { DelayedUnmount } from "../Utils/DelayedUnmount";
import { Grid, Item } from "../Grid/Grid";
import { Card } from "../Card/Card";
import { CascadeSlideAnimation } from "./CascadeSlideAnimation";

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
				<Grid>
					<Item xs={4}>
						<Card>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur ea facilis nesciunt tempore!
								Accusantium at distinctio hic id incidunt itaque magni minima nemo quasi sapiente suscipit temporibus
								tenetur, unde!
							</Typography>
						</Card>
					</Item>
				</Grid>
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
	))
	.add('Cascade animation with Grid and Item', () => (
		<Grid spacing='1em' direction='column'>
			<CascadeSlideAnimation>
				<Item>
					<Card>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque consequuntur dolore doloribus
							eaque earum error illum, iure, nam omnis placeat provident quae temporibus vero vitae voluptatum!
							Incidunt,
							veniam!
						</Typography>
					</Card>
				</Item>
				<Item>
					<Card>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque consequuntur dolore doloribus
							eaque earum error illum, iure, nam omnis placeat provident quae temporibus vero vitae voluptatum!
							Incidunt,
							veniam!
						</Typography>
					</Card>
				</Item>
				<Item>
					<Card>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque consequuntur dolore doloribus
							eaque earum error illum, iure, nam omnis placeat provident quae temporibus vero vitae voluptatum!
							Incidunt,
							veniam!
						</Typography>
					</Card>
				</Item>
			</CascadeSlideAnimation>
		</Grid>
	))
	.add('Cascade animation with regular elements', () => (
		<CascadeSlideAnimation>
			<div>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci alias
					consequuntur dicta eius, expedita nisi optio quibusdam, recusandae repellat suscipit tempore ut voluptate
					voluptatem! Ea explicabo iure nihil.
				</Typography>
			</div>
			<div>
				<Typography>
					Ad amet assumenda deleniti esse eum ex officia omnis quia. Accusantium animi dolor doloremque ea
					ex harum, hic ipsam itaque iusto magni maiores natus nisi porro praesentium sunt tenetur vitae.
				</Typography>
			</div>
			<div>
				<Typography>
					Ab, beatae commodi dicta eum illum reprehenderit voluptatibus. Atque beatae corporis cupiditate
					debitis dolorem eius ex expedita, iure magni minima, odio officiis omnis quam soluta suscipit tempore ullam
					veritatis voluptatibus?
				</Typography>
			</div>
		</CascadeSlideAnimation>
	))
	.add('Animation as Grid child', () => (
		<Grid spacing='1em'>
			<Animation keyframe='fadeIn'>
				<Card>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores
						aspernatur atque aut consequuntur cum facilis, id in iusto, laudantium nam non quae quisquam quo rem sequi
						temporibus unde. Commodi.
					</Typography>
				</Card>
			</Animation>
		</Grid>
	));