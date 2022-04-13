import React from 'react';
import './auth.scss';
import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AuthNavigationBar from './authNavigation';

export default function Auth() {
  return (
    <div className='container-md bg-light border rounded-3 auth pt-2'>
      <Stack>
        <AuthNavigationBar />
        <Outlet />
      </Stack>
    </div>
  );
}
