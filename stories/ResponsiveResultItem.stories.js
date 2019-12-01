import React from 'react';
import App from '../src/App';
import { storiesOf, addDecorator } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

storiesOf('ResponsiveBoatListItem', module)
.add('desktop', () => (
  <App/>
), { viewport: { defaultViewport: 'desktop' }});

storiesOf('ResponsiveBoatListItem', module)
.add('mobile', () => (
  <App/>
), { viewport: { defaultViewport: 'mobile' }});
