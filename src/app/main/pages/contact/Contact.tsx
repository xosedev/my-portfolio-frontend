import { Button, Paper, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import StructurePage from '../../../shared/components/structure-page/StructurePage';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import mailService from '../../../service/mail.service';
import { Mail } from '../../../model/mail.model';
import { useState } from 'react';

const Root = styled(StructurePage)(({ theme }) => ({
}));

function ContactPage() {
  const { t } = useTranslation('contactPage');
  const [success, setSuccess] = useState(false)
  const defaultValues = { name: '', email: '', subject: '', message: '' };

  const schema = yup.object().shape({
    name: yup.string().required('You must enter a name'),
    subject: yup.string().required('You must enter a subject'),
    message: yup.string().required('You must enter a message'),
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  });

  const { control, handleSubmit, watch, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  const onSubmit = async (mail: any) => {
    const mailSend: Mail = {
      userName: mail.name,
      from: mail.email,
      subject: mail.subject,
      text: mail.message
    }
    const response = await mailService.sendMail(mailSend)
    if (response.data.status === 200) {
      reset(defaultValues);
      setSuccess(true)
    }
  }

  const resetForm = () => {
    reset(defaultValues);
  }

  if (_.isEmpty(form)) {
    return null;
  }
  return (
    <Root content={
      <main>
        <div className="max-w-7xl mx-auto y-6p sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h4 hidden>{t('TITLE')}</h4>
            {!success ? (<Paper className="p-20 pb-20 rounded-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="px-0">
                <div className="mb-10">
                  <Typography className="text-2xl font-bold tracking-tight">
                    Contactate conmigo
                  </Typography>
                  <Typography color="text.secondary">
                    Te respondere a la brevedad.
                  </Typography>
                </div>
                <div className="mb-10">
                  <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <TextField
                        className="w-full"
                        {...field}
                        label="Name"
                        placeholder="Name"
                        id="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-5 w-full"
                        label="Email"
                        placeholder="Email"
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        required
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="subject"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-5 w-full"
                        label="Subject"
                        placeholder="Subject"
                        variant="outlined"
                        fullWidth
                        error={!!errors.subject}
                        helperText={errors?.subject?.message}
                        required
                      />
                    )}
                  />

                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Message"
                        className="mt-5 w-full"
                        margin="normal"
                        multiline
                        minRows={4}
                        variant="outlined"
                        error={!!errors.message}
                        helperText={errors?.message?.message}
                        required
                      />
                    )}
                  />
                </div>
              </form>
              <div className="flex items-center justify-end mt-5">
                <Button type="reset" onClick={resetForm} className="mx-8">Cancel</Button>
                <Button
                  className="mx-8"
                  variant="contained"
                  color="secondary"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  onClick={handleSubmit(onSubmit)}
                >
                  Save
                </Button>
              </div>
            </Paper>) : (<Paper className="p-20 pb-20 rounded-2xl">
              <span>Hola gracias por contactarte conmigo, te respondere a la brevedad.</span>
              <div className="flex items-center justify-end mt-5 ">
                <Button
                  className="mx-8"
                  variant="contained"
                  color="secondary"
                  onClick={() => setSuccess(false)}
                >
                  Enviar un nuevo Mail
                </Button>
              </div>
            </Paper>)}
          </div>
        </div>
      </main>
    }>
    </Root>

  );
}

export default ContactPage;