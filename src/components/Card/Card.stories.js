import React from 'react';
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { Card } from "./Card";
import { Typography } from "../Typography/Typography";

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