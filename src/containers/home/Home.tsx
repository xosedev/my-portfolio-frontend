import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Root = styled('div')(({ theme }) => ({
}));

function HomePage() {
  const { t } = useTranslation('homePage');

  return (
    <Root>
      {t('TITLE')}
      </Root>
  );
}

export default HomePage;
