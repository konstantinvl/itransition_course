import React from 'react';
import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ViewNavigationBar from './viewNavigationBar';

export default function View() {
  return (
    <div className='container-md bg-light border rounded-3 pt-2'>
      <Stack>
        <ViewNavigationBar />
        <Outlet />
      </Stack>
    </div>
  );
}
