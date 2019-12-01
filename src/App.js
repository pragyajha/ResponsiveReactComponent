import React from 'react';
import './App.css';
import ResponsiveBoatListItem from '../src/views/ResponsiveBoatListItem';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <ResponsiveBoatListItem />
      </ThemeProvider>
  );
}

export default App;
