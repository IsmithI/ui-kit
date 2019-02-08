import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select } from '@storybook/addon-knobs/react';
addDecorator(withKnobs);
setAddon(JSXAddon);

const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
	require('./welcomeStory');
	req.keys().forEach(file => req(file))
}

configure(loadStories, module);