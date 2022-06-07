import { Box, Toolbar } from '@mui/material';
import * as React from 'react';

const Footer = (props: any) => {


  return (
    <Box
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
  >
    <Toolbar className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center overflow-x-auto">
      <div className='max-w-7xl'>example</div>
    </Toolbar>
  </Box>
  );
};
export default Footer;
