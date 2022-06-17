import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/StructurePage';
import { motion } from 'framer-motion';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function ProjectsPage() {
  const { t } = useTranslation('projectsPage');

  const itemData = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 6,
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 7,
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 8,
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 9,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 10,
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 11,
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
    {   id: 12,
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
    },
  ];
  
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
                  {itemData.map((project: any) => (
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
                            {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {project.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Go
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
        </div>
      </main>
    }>
    </Root>
  );
}

export default ProjectsPage;
