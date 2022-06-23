import React from 'react';
import './mocks';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import withAppProviders from './withAppProviders';
import LayoutPortfolio from './layout/layout-portfolio/layoutPortfolio';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './config/utils';
import { AuthProvider } from './auth/AuthContext';
import BrowserRouter from './config/browserRouter';


function App() {

  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter >
          <LayoutPortfolio />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default withAppProviders(App)({});


