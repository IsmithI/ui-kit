import React from 'react';
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs/react";
import { Button } from "./index";

const icon = {
	src: 'react',
	variant: 'xs'
};

storiesOf('Components/Button', module)
	.add('Regular', () => (
			<Button
				label={text('label', 'Button')}
				variant={select('variant', {
					Default: 'default',
					Primary: 'primary',
					Secondary: 'secondary',
					Disabled: 'disabled'
				})}
			/>
		)
	)
	.add('With icon', () => (
		<Button
			label={text('label', 'Button')}
			icon={icon}
			variant={select('variant', {
				Default: 'default',
				Primary: 'primary',
				Secondary: 'secondary',
				Disabled: 'disabled'
			})}
		/>
	));