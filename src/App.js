import React, { useState, useEffect } from 'react';
import AppNavbar from './Components/AppNavbar/AppNavbar';
import Home from './Pages/Home/Home';
import Loading from './Components/Loading/Loading';
import Footer from './Components/Footer/Footer';
import { Routes, Route} from 'react-router-dom';
import Project from './Pages/Project/Project';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AppNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project/>} />
          </Routes>
          <hr/>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default App;
