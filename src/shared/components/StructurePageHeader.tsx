import { Container } from '@mui/material';
import clsx from 'clsx';

const StructurePageHeader = (props: any) => {

  return (
    <div className={clsx('xosedev-header', props.className)}>
      <Container>
      {props.header && props.header}
      </Container>
    </div>
  );
}
export default StructurePageHeader;
