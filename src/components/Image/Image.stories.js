import React from 'react';
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { Image } from "./Image";


storiesOf('Components/Image', module)
	.add('Lazy loaded', () => (
		<Image
			src={select('Source', {
				Cars: 'images/cars.jpg',
				Frameworks: 'images/frameworks.png',
				Error: 'images/nonexistingimage.png'
			}, 'images/cars.jpg')}
		/>
	));