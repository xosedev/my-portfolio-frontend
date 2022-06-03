import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import LayoutPortfolio from './layout/layout-portfolio';
import withAppProviders from './withAppProviders';
import { BrowserRouter } from 'react-router-dom';
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LayoutPortfolio />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default withAppProviders(App)({});
