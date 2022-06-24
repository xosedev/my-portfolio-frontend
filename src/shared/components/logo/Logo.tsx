
import { useTheme } from '@mui/material';
import { forwardRef, useEffect } from 'react';

const Logo = forwardRef((props: any, ref) => {

  const { palette } = useTheme();

  useEffect(() => {
    console.log(palette);
  }, [palette]);


  return (
    <>
      {
        palette.mode == 'dark' ? (
          <svg style={{ height: 45, width: 120, fill: 'red' }}>
            <image href="./assets/img/2.svg" style={{ height: 50, fill: 'red' }} />
          </svg>
        ) : (
          <svg style={{ height: 45, width: 120, fill: 'red' }}>
            <image href="./assets/img/1.svg" style={{ height: 50, fill: 'red' }} />
          </svg>
        )
      }
    </>
  );
});

export default Logo;
