import { styled } from '@mui/material/styles';
import * as React from 'react';
import { memo, useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import Footer from './components/footer/footer.component';
import NavBar from './components/navbar/navbar.component';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';

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
                    <Box className='hidden'>
                        <Fab color="primary" aria-label="add" style={{ bottom: 80, right: 10, position: 'fixed' }}>
                            <AddIcon />
                        </Fab>
                    </Box>
                    <Footer className="fixed" />
                </main>
            </div>
        </Root>);
};
export default memo(LayoutPortfolio);
