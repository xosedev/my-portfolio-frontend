import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/structure-page/StructurePage';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function GamesPage() {
  const { t } = useTranslation('gamesPage');
  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-96">
              <h4>{t('TITLE')}</h4>
            </div>
          </div>
        </div>
      </main>
    }>
    </Root>
  );
}

export default GamesPage;
