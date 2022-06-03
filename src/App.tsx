import React from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import { CssBaseline, ThemeOptions } from '@mui/material';
import withAppProviders from './withAppProviders';
import { BrowserRouter } from 'react-router-dom';
import LayoutPortfolio from './layout/layout-portfolio/layoutPortfolio';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './config/utils';
import { StateFromReducersMapObject } from '@reduxjs/toolkit';

function App() {

  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <LayoutPortfolio />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default withAppProviders(App)({});
