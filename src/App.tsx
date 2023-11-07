import React, { lazy, Suspense, useState } from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './global.css';
import { NotFound } from './pages/NotFound';
import { HeaderFooter } from './pages/HeaderFooter';

export interface MenuData {
  id: string;
  name: string;
  href: string;
  isActive: boolean;
}

export const menuData: MenuData[] = [
  { name: 'Home', href: '/', isActive: false },
  { name: 'About', href: '/about', isActive: false },
  { name: 'Team', href: '/team', isActive: false },
  { name: 'Shop', href: '/shop', isActive: false },
  { name: 'Pages', href: '/pages', isActive: false },
].map((item) => ({ ...item, id: nanoid() }));

function App() {
  const [isSBOpen, setIsSBOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <HeaderFooter
              menuData={menuData}
              isSBOpen={isSBOpen}
              setIsSBOpen={setIsSBOpen}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound isSBOpen={isSBOpen} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
