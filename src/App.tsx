import React, { lazy, Suspense } from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

export interface MenuData {
  id: string;
  name: string;
  href: string;
  isActive: boolean;
}

export const menuData: MenuData[] = [
  { name: 'Home', href: '/', isActive: false },
  { name: 'About', href: '/about', isActive: false },
  { name: 'Team', href: '#', isActive: false },
  { name: 'Shop', href: '#', isActive: false },
  { name: 'Pages', href: '#', isActive: false },
].map((item) => ({ ...item, id: nanoid() }));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
        <Route path='/*/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
