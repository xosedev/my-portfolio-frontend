import { Card, CardHeader, Avatar, IconButton, Typography, CardContent, CardActions, Button, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/StructurePage';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function BlogPage() {
  const { t } = useTranslation('blogPage');
  const data = [
    {
      "id": "1",
      "user": {
        "name": "test",
        "avatar": "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
      },
      "message": "test",
      "time": "1 minutes ago",
      "type": "post",
      "like": 1,
      "share": 1,
      "media": {
        "type": "image",
        "preview": "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
      },
      "comments": [
        {
          "id": "1",
          "user": {
            "name": "test",
            "avatar": "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
          },
          "time": "April 1, 2022",
          "message": "test."
        }
      ]
    },
  ]

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
            <div className="rounded-lg">
              <h4>{t('TITLE')}</h4>

              <motion.div variants={container} initial="hidden" animate="show" className="w-full">
                {data.map((post) => (
                  <Card component={motion.div} variants={item} key={post.id} className="mb-32">
                    <CardHeader
                      avatar={<Avatar aria-label="Recipe" src={post.user.avatar} />}
                      action={
                        <IconButton aria-label="more" size="large">
                          <CodeIcon />
                        </IconButton>
                      }
                      title={
                        <span className="flex items-center space-x-8">
                          <Typography className="font-normal" color="secondary.main" paragraph={false}>
                            {post.user.name}
                          </Typography>
                          <span>
                            {post.type === 'post'}
                            {post.type === 'something'}
                            {post.type === 'video'}
                            {post.type === 'article'}
                          </span>
                        </span>
                      }
                      subheader={post.time}
                    />

                    <CardContent >
                      {post.message && (
                        <Typography component="p" className="mb-5">
                          {post.message}
                        </Typography>
                      )}

                      {post.media && <img src={post.media.preview} alt="post" className="rounded-8" />}

                    </CardContent>

                    <CardActions disableSpacing >
                      <Button aria-label="Share">
                        <CodeIcon />
                        <Typography className="mx-4">Share</Typography>
                        <Typography>({post.share})</Typography>
                      </Button>
                    </CardActions>
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

export default BlogPage;
