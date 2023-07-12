import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster></Toaster>
      <RouterProvider router={routes}></RouterProvider>

    </div>
  );
};

export default App;