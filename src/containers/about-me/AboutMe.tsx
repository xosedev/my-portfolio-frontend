import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Root = styled('div')(({ theme }) => ({
}));

function AboutMePage() {
  const { t } = useTranslation('aboutMePage');

  return (
    <Root>
      {t('TITLE')}
      </Root>
  );
}

export default AboutMePage;
