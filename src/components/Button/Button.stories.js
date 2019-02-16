import React from 'react';
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import { Button } from "./index";

const icon = {
	src: 'react',
	variant: 'xs'
};

storiesOf('Components/Button', module)
	.add('Regular', () => (
			<Button
				variant={select('variant', {
					Default: 'default',
					Primary: 'primary',
					Secondary: 'secondary',
					Disabled: 'disabled'
				})}>
				{text('label', 'Button')}
			</Button>
		)
	)
	.add('With icon', () => (
		<Button
			icon={icon}
			variant={select('variant', {
				Default: 'default',
				Primary: 'primary',
				Secondary: 'secondary',
				Disabled: 'disabled'
			})}>
			{text('label', 'Button')}
		</Button>
	));