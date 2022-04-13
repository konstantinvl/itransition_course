import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Userlist from '../components/userList/userlist';
import View from '../components/view/view';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path='/' element={<View />}>
        <Route index element={<Navigate to='userlist' />} />
        <Route path='userlist' element={<Userlist />} />
        <Route path='messages' element={<div>messages</div>} />
        <Route path='*' element={<Navigate to='userlist' />} />
      </Route>
    </Routes>
  );
}
