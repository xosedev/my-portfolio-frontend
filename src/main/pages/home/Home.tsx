import { Button, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/StructurePage';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function HomePage() {
  const { t } = useTranslation('homePage');

  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-96">
              <h4 hidden>{t('TITLE')}</h4>

              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                   Lorem Ipsum
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="outlined">Test</Button>
                  <Button variant="outlined">Test</Button>
                </Stack>
              </Container>


            </div>
          </div>
        </div>
      </main>
    }>
    </Root>
  );
}

export default HomePage;
