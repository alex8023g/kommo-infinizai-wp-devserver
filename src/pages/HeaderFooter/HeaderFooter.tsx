import React from 'react';
import styles from './headerfooter.css';
import { Header, HeaderProps } from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export function HeaderFooter({ menuData, isSBOpen, setIsSBOpen }: HeaderProps) {
  return (
    <>
      <Header menuData={menuData} isSBOpen={isSBOpen} setIsSBOpen={setIsSBOpen} />
      <Outlet />
      <Footer />
    </>
  );
}
