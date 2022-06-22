import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/StructurePage';
import { motion } from 'framer-motion';
import withReducer from '../../../store/withReducer';
import reducer from './store';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, selectProjects } from './store/dataSlice';
import { useEffect } from 'react';
import GitHub from '@mui/icons-material/GitHub';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function ProjectsPage() {
  const { t } = useTranslation('projectsPage');
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    dispatch(getProjects() as any);
  }, [dispatch]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };



  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className=" rounded-lg ">
              <h4>{t('TITLE')}</h4>
            
              <motion.div  variants={container}  initial="hidden" animate="show" className="w-full">
                <Box sx={{ width: '100%' }}>
                  <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                  {projects.map((project: any) => (
                    <Grid item xs={12} sm={6} md={3}   key={project.id}>
                      <Card  component={motion.div} variants={item}  key={project.id}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={project.img}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {project.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {project.desc}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            <GitHub></GitHub>
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                   ))}
                   <Grid item xs={12} sm={6} md={3}   key={32434234}>
                      <Card  component={motion.div} variants={item}  key={4353564}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://png.pngitem.com/pimgs/s/238-2384580_project-portfolio-management-software-hackathons-for-beginners-hd.png"
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            coming soon
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            coming soon
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            <GitHub></GitHub>
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    }>
    </Root>
  );
}

export default withReducer('projectsPage', reducer)(ProjectsPage);
