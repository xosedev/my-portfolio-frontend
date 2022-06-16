
import { styled } from '@mui/material';
import { forwardRef, memo } from 'react';
import StructurePageHeader from './StructurePageHeader';
import clsx from 'clsx';
const Root = styled('div')(({ theme, ...props }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: '100%',
  position: 'relative',
  flex: '1 1 auto',
  width: '100%',
  height: 'auto',
  '&.xosedev-header': {
    display: 'flex',
    flex: '0 0 auto',
  },
  '& .xosedev-wrapper': {
    flexDirection: 'row',
    flex: '1 1 auto',
    zIndex: 2,
    minWidth: 0,
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

  '& .structurePage-content': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: '1 1 auto',
    overflow: 'hidden',
    //    WebkitOverflowScrolling: 'touch',
    zIndex: 9999,
  },
}
))


const StructurePage = forwardRef((props: any, ref) => {

  return (
    <>
      <Root
        className={clsx(
          props.className
        )}>
        <div className="flex flex-auto flex-col z-10 h-full">
          <div className="xosedev-wrapper">
            <div
              className="structurePage-content">

              {props.header && <StructurePageHeader header={props.header} />}
              {props.content}
            </div>
          </div>
        </div>
      </Root>
    </>
  );
});

export default memo(styled(StructurePage)``);
