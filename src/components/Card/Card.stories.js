import React from 'react';
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { Card } from "./Card";
import { Typography } from "../Typography/Typography";
import { Grid, Item } from "../Grid";

const stories = storiesOf('Components/Card', module);

const paddingOptions = {
	Small: 'sm',
	Medium: 'md',
	Large: 'lg'
};

stories.add('Card with text', () => (
	<Card padding={select('Padding', paddingOptions, paddingOptions.Medium)}>
		<Typography>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam cum est expedita, hic minus nam neque
			pariatur quaerat quidem. Aperiam doloribus fugit, harum impedit iste iure quibusdam quos saepe?
		</Typography>
	</Card>
));

const elevationOptions = {
	None: 'none',
	Regular: 'regular',
	High: 'high',
	Highest: 'highest'
};

stories.add('Elevated cards', () => (
	<Grid spacing='1em'>
		<Item>
			<Card>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut consequuntur debitis dignissimos ducimus
					eveniet excepturi facere ipsa modi molestiae nihil perspiciatis placeat quasi quod repellendus rerum saepe
					sapiente sunt!
				</Typography>
			</Card>
		</Item>
		<Item>
			<Card elevation={select('Elevation', elevationOptions, 'regular')}>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut consequuntur debitis dignissimos ducimus
					eveniet excepturi facere ipsa modi molestiae nihil perspiciatis placeat quasi quod repellendus rerum saepe
					sapiente sunt!
				</Typography>
			</Card>
		</Item>
	</Grid>
));