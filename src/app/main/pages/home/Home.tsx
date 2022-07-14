import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/structure-page/StructurePage';
import emoji from "react-easy-emoji";
import "./style.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const Root = styled(StructurePage)(({ theme }) => ({
}));

function HomePage() {
  const { t } = useTranslation('homePage');
  const navigator = useNavigate()
  const toAboutMe = () => {
    navigator("/about-me");
  }
  const user = useSelector(selectUser);
  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg">
              <h4 hidden>{t('TITLE')}</h4>
              <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                      <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                          Hola {' '}
                          <span className="wave-emoji">{emoji("😸")}</span>
                        </h1>
                        <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          Bienvenidos a mi sitio web, mi nombre es Jose Toro, soy desarrollador de software.<br />
                          Tengo experiencia con Java, Node Js, Angular, React, React Native entre otros. <br />
                          Desarrollo aplicaciones mobiles y web
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                          <div className="rounded-md shadow">
                            <Button
                              onClick={toAboutMe}
                              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                              About me
                            </Button>
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a
                              href="https://www.xosedev.com/.uploads/docs/cv/JOSE_%20LEONARDO%20TORO%20MONTECINOS%20-%20CV.pdf" target={'_blank'}  rel="noreferrer"
                              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                               download>
                              CV
                            </a>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex  justify-center ">
                  <img 
                    className="scale-0 h-56 sm:h-50 md:h-40 lg:w-80 lg:h-80 lg:mt-40 rounded-full shadow-lg"
                    src={user.img}
                    alt=""
                  />              
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    }>
    </Root>
  );
}

export default HomePage;
