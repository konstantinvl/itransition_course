import React from 'react';
import './App.scss';
import AppRouter from './router/appRouter';

function App() {
  return (
    <div className='app container-fluid'>
      <AppRouter />
    </div>
  );
}

export default App;
