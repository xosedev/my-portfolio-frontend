import { Button, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/StructurePage';
import emoji from "react-easy-emoji";
import "./style.css";
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
                Hola <span className="wave-emoji">{emoji("😸")}</span>
                </Typography>
                <Typography variant="h5" align="center" paragraph justifyContent="center">
                  Bienvenidos a mi sitio web, mi nombre es Jose Toro, soy desarrollador de software.<br/>
                  Tengo experiencia con Java, Node Js, Angular, React, React Native entre otros. <br/>
                  Desarrollo aplicaciones mobiles y web
                </Typography>

                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="outlined" color="error">Mas Sobre mi</Button>
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
