import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../shared/components/StructurePage';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function HomePage() {
  const { t } = useTranslation('homePage');

  return (
    <Root content={
      <div className="p-24">
          <h4>{ t('TITLE') }</h4>
          <br />
        </div>
    }>

    </Root>
  );
}

export default HomePage;
