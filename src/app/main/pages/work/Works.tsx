import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/structure-page/StructurePage';
import { motion } from 'framer-motion';
import withReducer from '../../../store/withReducer';
import reducer from './store';
import { useDispatch, useSelector } from 'react-redux';
import { getWorks, selectWorks } from './store/dataSlice';
import { useEffect } from 'react';
import ArrowRight from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';



const Root = styled(StructurePage)(({ theme }) => ({
}));

function WorksPage() {
  const { t } = useTranslation('worksPage');
  const dispatch = useDispatch();
  const works = useSelector(selectWorks);

  useEffect(() => {
    dispatch(getWorks() as any);
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
            <h4>{t('TITLE')}</h4>
            <motion.div variants={container} initial="hidden" animate="show" className="w-full">
              <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                  {works.map((work: any) => (
                    <Grid item xs={12} sm={6} md={3} key={work.id}>
                      <Card component={motion.div} variants={item} key={work.id} className='rounded-16'>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={work.img}
                            alt="project img"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                              {work.name}
                            </Typography>
                            <Accordion>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography>Projects</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                  {work.projects.map((data: any, index: any) => (
                                    <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                                      <Chip label={data} size="small" />
                                    </Grid>
                                  ))}
                                </Grid>
                              </AccordionDetails>
                            </Accordion>
                            <Accordion>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                              >
                                <Typography>Tecnologies</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                  {work.tecnologies.map((data: any, index: any) => (
                                    <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                                      <Chip label={data} size="small" />
                                    </Grid>
                                  ))}
                                </Grid>
                              </AccordionDetails>
                            </Accordion>



                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary" href={work.url}>
                            <ArrowRight></ArrowRight>
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
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

export default withReducer('worksPage', reducer)(WorksPage);
