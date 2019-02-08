import React from 'react';
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { Icon } from "./Icon";

storiesOf('Components/Icon', module)
	.add('default', () => (
		<Icon
			src={'react'}
			variant={select('variant', {
				Default: 'default',
				Small: 'sm',
				Medium: 'md',
				Large: 'lg'
			})}
		/>
	));