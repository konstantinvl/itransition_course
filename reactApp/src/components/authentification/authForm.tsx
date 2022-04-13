import { Field, Form, Formik } from 'formik';
import React from 'react';
import { AuthFormProps } from '../../common/interfaces';

export default function AuthForm(props: AuthFormProps) {
  const { title, callback } = props;
  const initialValues = { login: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        callback(values);
      }}>
      <Form className='p-2'>
        <legend>{title}</legend>
        <div className='mb-3'>
          <label htmlFor='login' className='form-label'>
            Login:
          </label>
          <Field type='text' id='login' name='login' className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <Field type='password' id='password' name='password' className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}
