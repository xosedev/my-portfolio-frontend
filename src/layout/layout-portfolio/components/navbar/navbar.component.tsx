import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import styles from './styles';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../store/themeSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import reducer from './store';
import withReducer from '../../../../store/withReducer';
import { getMenus, selectMenus } from './store/dataSlice';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const NavBar = () => {
  const PAGE_NAME= process.env.REACT_APP_PAGE_NAME
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const menus = useSelector(selectMenus);

  useEffect(() => {
    dispatch(getMenus() as any);
    
  }, [dispatch]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const changeModeTheme = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(toggleTheme())
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const navidateToPage = (page: string) => {
    navigate(page, { replace: true });
  };

  const navidateToPageAndClose = (page: string) => {
    setAnchorElNav(null);
    navigate(page, { replace: true });
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 

  return (
    <AppBar position="static">
      
      <Container className='max-w-7xl'>
        <Toolbar disableGutters>
          <CodeIcon sx={styles.codeIconSx} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.logoNameSx}
          >
            {PAGE_NAME}
           
          </Typography>

          <Box sx={styles.boxContainerSx}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

         
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.menuSx}
            >
              {menus.map((menu: any) => (
                <MenuItem key={menu.id}
                onClick={ () => navidateToPageAndClose(menu.id)}
                 >
                  <Typography textAlign="center">{menu.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CodeIcon sx={styles.codeIconSxFull} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={styles.logoNameSxFull}
          >
            {PAGE_NAME}
          </Typography>
          <Box sx={styles.boxPageContainerSx}>
            {menus.map((menu: any) => (
              <Button
                key={menu.id}
                onClick={ () => navidateToPage(menu.id)}
                sx={styles.btnPageSxFull}
              >
                {menu.name}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={changeModeTheme} sx={{  p: 0, marginRight: 5}}>
              <Brightness5Icon/>
            </IconButton>
            <Tooltip title="Menu hidden">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="JT"/>
              </IconButton>
            </Tooltip>
            <Menu hidden
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withReducer('navBar', reducer)(NavBar);
