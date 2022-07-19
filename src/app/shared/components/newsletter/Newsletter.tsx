import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useEffect } from 'react';
import _ from 'lodash';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

interface PropsNewsletter {
  open: boolean;
  onClose: () => void;
  onSubscribe: (value: string) => void
}

const Newsletter = (props: PropsNewsletter) => {
  let data = props.open

  const defaultValues = { email: '' };

  const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  });

  const { control, handleSubmit, watch, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  const handleSubscribe = (mail: any) => {
    props.onSubscribe(mail.email);
    resetForm();
  }

  const resetForm = () => {
    reset(defaultValues);
  }

  const handleClose = () => {
    resetForm();
    props.onClose();
  }

  useEffect(() => {

  }, [data])

  if (_.isEmpty(form)) {
    return null;
  }
  return (
    <Dialog open={data} onClose={handleClose}>
      <DialogTitle>Subscribete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Suscríbete con tu correo electrónico para recibir información sobre cursos y nuevos videos.
        </DialogContentText>
        <form onSubmit={handleSubmit(handleSubscribe)} className="px-0">
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button disabled={_.isEmpty(dirtyFields) || !isValid} onClick={handleSubmit(handleSubscribe)}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
export default Newsletter;
