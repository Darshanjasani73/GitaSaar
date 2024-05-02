import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
// eslint-disable-next-line import/named
import { Home, Videos, Yogasadhana, Store, Quotes, About, Slok, Adhyays, Asans, Mudra, Dhyan, Pranayam, Ved, Upanishad, Puran, OtherBooks, Vedpuran } from './pages';

import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { currentMode, activeMenu } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar ">
              <Navbar />
            </div>
            <div>
              <Routes>

                <Route path="/" element={(<Home />)} />
                <Route path="/home" element={(<Home />)} />

                <Route path="/videos" element={<Videos />} />
                <Route path="/chapter/:chapterNumber/verses" element={<Adhyays />} />
                <Route path="/chapter/:chapterNumber/verses/:verseNumber" element={<Slok />} />

                <Route path="/store" element={<Store />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/yogasadhana" element={<Yogasadhana />} />
                <Route path="/about" element={<About />} />
                <Route path="/yogasadhana/asans" element={<Asans />} />
                <Route path="/yogasadhana/yoga" element={<Pranayam />} />
                <Route path="/yogasadhana/mudra" element={<Mudra />} />
                <Route path="/yogasadhana/dhyan" element={<Dhyan />} />
                <Route path="/vedpuran" element={<Vedpuran />} />

                <Route path="/vedpuran/ved" element={<Ved />} />
                <Route path="/vedpuran/puran" element={<Puran />} />
                <Route path="/vedpuran/upanishad" element={<Upanishad />} />
                <Route path="/vedpuran/otherscripture" element={<OtherBooks />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
