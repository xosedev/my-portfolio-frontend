import { Box, Toolbar } from '@mui/material';
import { Container } from '@mui/material';
const Footer = (props: any) => {
  
  return (
    <Box
      sx={{
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Toolbar className="min-h-48 flex items-center overflow-x-auto">
        <Container className="flex items-center">
          <div className='flex flex-col items-center w-full'><div>{process.env.REACT_APP_FOOTER_TEXT}</div></div>
        </Container>
      </Toolbar>
    </Box>
  );
};
export default Footer;
