import { configure, addParameters } from '@storybook/react';


const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '500px',
      height: '963px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '1980px',
    },
  },
};
 
addParameters({
    viewport: {
      viewports: {
        ...newViewports,
      },
    },
  });

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
