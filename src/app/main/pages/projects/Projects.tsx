import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/structure-page/StructurePage';
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
        <div className="max-w-7xl mx-auto y-6p sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
              <h4 hidden>{t('TITLE')}</h4>
              <motion.div variants={container} initial="hidden" animate="show" className="w-full">
                <Box sx={{ width: '100%' }}>
                  <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                    {projects.map((project: any) => (
                      <Grid item xs={12} sm={6} md={3} key={project.id}>
                        <Card component={motion.div} variants={item} key={project.id} className='rounded-16'>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image={project.img}
                              alt="project img"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h6" component="div">
                                {project.name}
                              </Typography>
                              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                {project.desc.map((data: any, index: any) => (
                                  <Grid item xs={3} sm={4} md={4} lg={4} key={index}>
                                    <Chip label={data} size="small" />
                                  </Grid>
                                ))}
                              </Grid>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary" href={project.url}>
                              <GitHub></GitHub>
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={3} key={0} >
                      <Card component={motion.div} variants={item} key={0} className='rounded-16'>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.neow.in/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"
                            alt="project img"
                          />
                          <CardContent>
                            <Typography gutterBottom component="div">
                              coming soon
                            </Typography>
                            <Typography color="text.secondary">
                              coming soon
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </div>
          </div>
      </main>
    }>
    </Root>
  );
}

export default withReducer('projectsPage', reducer)(ProjectsPage);
