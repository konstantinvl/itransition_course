import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../services/store/hooks';
import AuthRouter from './authRouter';
import ViewRouter from './viewRouter';

export default function AppRouter(): JSX.Element {
  const { user } = useAppSelector((store) => store);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [user]);
  return (
    <Routes>
      <Route index element={<Navigate to={user.login ? '/view' : '/auth'} />} />
      <Route path='/auth/*' element={<AuthRouter />} />
      <Route path='/view/*' element={<ViewRouter />} />
    </Routes>
  );
}
