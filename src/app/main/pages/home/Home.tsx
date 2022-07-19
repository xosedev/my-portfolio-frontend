import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/structure-page/StructurePage';
import emoji from "react-easy-emoji";
import "./style.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/userSlice';
import { Button, Paper } from '@mui/material';
import Newsletter from '../../../shared/components/newsletter/Newsletter';
import { useEffect, useState } from 'react';
const Root = styled(StructurePage)(({ theme }) => ({
}));

function HomePage() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const { t } = useTranslation('homePage');
  const user = useSelector(selectUser);

  useEffect(() => {
    
  }, [email])
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = (email: string) => {
    setOpen(false);
    setEmail(email);
  };

  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto y-6p sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg">
              <h4 hidden>{t('TITLE')}</h4>
              <Paper className="p-20 pb-20 rounded-2xl">
                <div className="relative overflow-hidden">
                  <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                        Hola {' '}
                        <span className="wave-emoji">{emoji("😸")}</span>
                      </h1>
                      <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                        Bienvenidos a mi sitio web, mi nombre es Jose Toro, soy desarrollador de software.<br />
                        Tengo experiencia con Java, Node Js, Angular, React, React Native entre otros. <br />
                        Desarrollo aplicaciones mobiles y web
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="mt-3 sm:mt-0">
                          <Button
                            variant='contained'
                            color='secondary'
                            href="https://www.xosedev.com/.uploads/docs/cv/JOSE_%20LEONARDO%20TORO%20MONTECINOS%20-%20CV.pdf" target={'_blank'} rel="noreferrer"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                            download>
                            CV
                          </Button>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => setOpen(true)}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                            suscribete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex  justify-center ">
                    <img
                      className="scale-0 h-56 sm:h-50 md:h-40 lg:w-80 lg:h-80 lg:mt-12 rounded-full shadow-lg"
                      src={user.img}
                      alt=""
                    />
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
        <Newsletter open={open} onClose={handleClose} onSubscribe={handleSubscribe}/>
      </main>
    }>
    </Root>
  );
}

export default HomePage;
