import { Avatar, Card, CardHeader, IconButton,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import StructurePage from '../../../shared/components/StructurePage';
import { getLinks, selectLinks } from './store/dataSlice';
import CodeIcon from '@mui/icons-material/Code';
import { useEffect } from 'react';

const Root = styled(StructurePage)(({ theme }) => ({

}));

function LinksPage() {
  const { t } = useTranslation('linksPage');
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);

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
        <div className="flex flex-col items-center w-full ">
          <div className="rounded-full items-center pt-10 ">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
              <img
                style={{ height: 128, width: 128 }}
                alt="img"
                className="border-4 rounded-full"
                src="data:image/jpeg;base64,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"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center  mt-16">
            <Typography className="text-lg font-bold leading-none">Jose Toro</Typography>
            <Typography color="text.secondary">Software developer</Typography>
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
                          avatar={<Avatar aria-label="Recipe" />}
                          action={
                            <IconButton hidden aria-label="more" size="large">
                              <CodeIcon />
                            </IconButton>
                          }
                          title={
                            <span className="flex items-center space-x-8">
                             aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </span>
                          }
                          subheader={121221}
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

export default LinksPage;

