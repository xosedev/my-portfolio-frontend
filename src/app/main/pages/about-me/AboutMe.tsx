import { Box, Grid, LinearProgress, LinearProgressProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import emoji from 'react-easy-emoji';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import StructurePage from '../../../shared/components/structure-page/StructurePage';
import withReducer from '../../../store/withReducer';
import reducer from './store';
import { getSkills, selectSkills } from './store/dataSlice';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function AboutMePage() {
  const { t } = useTranslation('aboutMePage');
  const skills = useSelector(selectSkills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills() as any);
  }, [dispatch]);


  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto y-6p sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg">
              <h4 hidden>{t('TITLE')}</h4>
              <div className="text-left">
                <h1 className="text-4xl tracking-tight font-extrabold mt-0">
                  Hola nuevamente {' '}
                  <span className="wave-emoji">{emoji("😸")}</span>
                </h1>
                <p className=" mt-3 text-base sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Por 10+ anios, he trabajado en el desarrollo de software, a lo largo de mi carrera he estado en proyectos,
                  tanto del lado backend como frontend o ambos a la vez, he trabajado en diferentes tecnologías, como
                  React, Angular, React Native, Typescript, NodeJS, Java, Spring Boot, etc.
                  <br />  <br />
                  He pasado por muchos roles tales como Qa Engineer, Backend Developer, Frontend Developer, FullStack Developer, Tech Lead.
                  <br />  <br />
                  Algo que puedo decir es que cada dia me apasiona mas el desarrollo y aun quiero aprender mas.
                  <br />  <br />
                  Me gusta mucho la programacion, por eso he decidido crear este sitio web para que puedas ver mis habilidades y conocimientos.
                  <br />  <br />
                  Ademas de la programacion tengo otros hobbies, como el deporte, la musica, la peliculas, la lectura, los videojuegos, el cine, etc.
                  <br />  <br />
                  Un hobbie que me gusta mucho es el desarrollo de videojuegos idie y el pixel art, por lo cual en mis tiempos libres me gusta mucho aprender y crear.
                </p>
                <br />
              </div>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold ">
              Skills {' '}
              <span className="wave-emoji">{emoji("⚙️")}</span>
            </h1>
            <Grid item xs={12} sm={12}>
              {skills.map((skill: any) => (<>
                <Typography variant="h6" component="div" justifyContent={'left'}>{skill.name}</Typography>
                <Grid container spacing={5} sx={{ mt: 3, paddingBottom: 5 }}>
                  {skill.tecnologies.map((tecnology: any) => (<>
                    <Grid item xs={12} sm={6} style={{ paddingTop: 2 }}>{tecnology.name} </Grid>
                    <Grid item xs={12} sm={6} style={{ paddingTop: 2 }}>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={tecnology.value} />
                      </Box>
                    </Grid>

                  </>))}
                </Grid>
              </>))}
            </Grid>
          </div>
        </div>

      </main>
    }>
    </Root>
  );
}


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" color='secondary' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default withReducer('aboutMePage', reducer)(AboutMePage);
