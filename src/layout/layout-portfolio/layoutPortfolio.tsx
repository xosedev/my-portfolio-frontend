import { styled } from '@mui/material/styles';
import * as React from 'react';
import { memo, useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import Footer from './components/footer/footer.component';
import NavBar from './components/navbar/navbar.component';

const Root = styled('div')(({ theme }) => ({
}));

const LayoutPortfolio = () => {
    const appContext: any = useContext(AppContext);
    const { routes } = appContext;
    return (
        <Root className="w-full flex">
            <div className="flex flex-auto min-w-0">
                <main className="flex flex-col flex-auto min-h-full min-w-0 relative z-10">
                    <NavBar />
                    <div className="flex flex-col flex-auto min-h-0 relative z-10 overflow">
                        {useRoutes(routes)}
                    </div>
                    <Footer className="fixed" />
                </main>
            </div>
        </Root>);
};
export default memo(LayoutPortfolio);
