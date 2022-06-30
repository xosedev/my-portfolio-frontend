
import { useTheme } from '@mui/material';
import { forwardRef, useEffect } from 'react';

interface LogoProps {
  height: string;
  width: string;
} 

const Logo = forwardRef((props: LogoProps, ref) => {

  const { palette } = useTheme();

  useEffect(() => {
    console.log(palette);
  }, [palette]);


  return (
    <>
      {
        palette.mode === 'dark' ? (
          <svg style={{ height: props.height, width: props.width }}>
            <image href="./assets/img/2.svg" style={{ height: props.height }} />
          </svg>
        ) : (
          <svg style={{ height: props.height, width: props.width }}>
            <image href="./assets/img/1.svg" style={{ height: props.height }} />
          </svg>
        )
      }
    </>
  );
});

export default Logo;
