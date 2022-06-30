import { Avatar, Card, CardHeader, IconButton,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import StructurePage from '../../../shared/components/StructurePage';
import { getLinks, selectLinks } from './store/dataSlice';
import CodeIcon from '@mui/icons-material/Code';
import { useEffect } from 'react';
import withReducer from '../../../store/withReducer';
import reducer from './store';
import { selectUser } from '../../../store/userSlice';

const Root = styled(StructurePage)(({ theme }) => ({
  
}));

function LinksPage() {
  const { t } = useTranslation('linksPage');
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLinks() as any);
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
    <Root
      header={
        <div className="flex flex-col items-center w-full">
          <div className="rounded-full items-center pt-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
              <img
                style={{ height: 128, width: 128 }}
                alt="img user"
                className="border-4 rounded-full"
                src={user.img}
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <Typography className="text-lg font-bold leading-none">{user.name}{" "}{user.lastName}</Typography>
            <Typography color="text.secondary">{user.desc}</Typography>
          </div>
        </div>

      }
      content={
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg">
                <h4 hidden>{t('TITLE')}</h4>
                  <motion.div variants={container} initial="hidden" animate="show" className="w-full">
                    {links.map((link:any) => (
                      <Card component={motion.div} variants={item} key={link.id} className="mb-5">
                        <CardHeader
                          avatar={<Avatar src={link.icon}></Avatar>}
                          action={
                            <IconButton hidden aria-label="more" size="large">
                              <CodeIcon />
                            </IconButton>
                          }
                          title={
                            <span className="flex items-center space-x-8">
                             {link.name}
                            </span>
                          }
                        />
                      </Card>
                    ))}
                  </motion.div>
              </div>
            </div>
          </div>
        </main>
      }>
    </Root>
  );
}

export default withReducer('linksPage', reducer)(LinksPage);

