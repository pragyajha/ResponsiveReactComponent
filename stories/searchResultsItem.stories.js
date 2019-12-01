import React from 'react';
import App from '../src/App';


export default {
  title: 'Responsive',
};

export const toStorybook = () => <App/>;

toStorybook.story = {
  name: 'mobileFirst',
};
