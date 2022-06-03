import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import NavBar from './components/navbar/navbar.component';

const Root = styled('div')(({ theme }) => ({
}));

const LayoutPortfolio = () => {
    const appContext: any = useContext(AppContext);
    const { routes } = appContext;
    return (
        <Root>
            <NavBar />
            {useRoutes(routes)}
        </Root>);
};
export default LayoutPortfolio;
