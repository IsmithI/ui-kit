import React from 'react';
import { storiesOf } from "@storybook/react";
import { Modal } from "./Modal";
import { Grid, Item } from "../Grid/Grid";
import { Typography } from "../Typography/Typography";
import { AnimatedModal } from "./AnimatedModal";
import { boolean } from '@storybook/addon-knobs';
import { Card } from "../Card/Card";

const openAnimation = {
	keyframe: 'fadeIn',
	duration: 1000
};
const closeAnimation = {
	keyframe: 'fadeOut',
	duration: 1000
};

storiesOf('Components/Modal', module)
	.add('Regular', () => (
		<Modal>
			<Grid justify='center' alignItems='center' expand>
				<Item>
					<Typography>
						Modal text
					</Typography>
				</Item>
			</Grid>
		</Modal>
	))
	.add('AnimatedModal', () => (
		<AnimatedModal openAnimation={openAnimation} closeAnimation={closeAnimation} isOpen={boolean('Open', false)}>
			<Grid justify='center' alignItems='center' expand>
				<Item cell={8}>
					<Card>
						<Typography variant='h2'>
							Modal text
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id impedit minima similique. Alias animi,
							atque
							aut debitis dicta distinctio eum facilis fugiat molestiae necessitatibus recusandae, rerum soluta sunt!
							Excepturi, laudantium.
						</Typography>
					</Card>
				</Item>
			</Grid>
		</AnimatedModal>
	));