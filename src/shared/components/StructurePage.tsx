
import { styled } from '@mui/material';
import { forwardRef, memo} from 'react';

const Root = styled('div')(({ theme, ...props }) => ({}
))


const StructurePage = forwardRef((props: any, ref) => {

  return (
    <>
      <Root>
        {props.content}
      </Root>
    </>
  );
});

export default memo(styled(StructurePage)``);
