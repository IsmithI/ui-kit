import React from 'react';
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import { Button } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
			variant={select('variant', {
				Default: 'default',
				Primary: 'primary',
				Secondary: 'secondary',
				Disabled: 'disabled'
			})}>
			{text('label', 'Button')}
			<FontAwesomeIcon icon={faCoffee} />
		</Button>
	));