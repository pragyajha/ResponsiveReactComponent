import React from 'react';
import './App.css';
import ResponsiveResultItem from '../src/views/ResponsiveResultItem';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';

function App() {
  console.log({theme});
  return (
      <ThemeProvider theme={theme}>
        <ResponsiveResultItem />
      </ThemeProvider>
  );
}

export default App;
