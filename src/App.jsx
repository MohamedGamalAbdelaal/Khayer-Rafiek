import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Azkar from './Pages/Home/Azkar/Azkar';
import Login from './Pages/Login/Login';
import AzkrSabahMesa from './Pages/AzkrSabah&Mesa/AzkrSabahMesa';
import Werd from './Pages/Werd/Werd';
import Masbaha from './Pages/Masbaha/Masbaha';
import DaiayTask from './Pages/DailyTask/DailyTask';

import { ToastContainer } from 'react-toastify';
import SplashScreen from './Component/ٍSplashScreen/ٍSplashScreen';

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);


  // أثناء وجود Splash Screen
  if (loading) {
    return <SplashScreen/>;
  }


  // الروترات بعد انتهاء الـ Splash
  const router = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'login', element: <Login /> },
    { path: 'azkar', element: <Azkar /> },
    { path: 'werd', element: <Werd /> },
    { path: 'azkarSabah', element: <AzkrSabahMesa /> },
    { path: 'masbaha', element: <Masbaha /> },
    { path: 'dailyTask', element: <DaiayTask /> }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
