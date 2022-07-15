
import { styled } from '@mui/material';
import { forwardRef, memo } from 'react';
import StructurePageHeader from '../structure-header/StructurePageHeader';
import clsx from 'clsx';
const Root = styled('div')(({ theme, ...props }) => ({
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
