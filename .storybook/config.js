import { addDecorator, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import '@storybook/addon-knobs/register';

addDecorator(withKnobs);
setAddon(JSXAddon);

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
	require('./welcomeStory');
	req.keys().forEach(file => req(file))
}

configure(loadStories, module);