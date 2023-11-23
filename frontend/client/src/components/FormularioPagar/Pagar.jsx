/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PagarForm from './pagar-form';

function Pagar() {
  const methods = useForm({
    mode: 'all',
  });
  return (
    <FormProvider {...methods}>
      <PagarForm />
    </FormProvider>
  );
}

export default Pagar;
