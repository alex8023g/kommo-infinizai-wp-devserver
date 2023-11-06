import React, { useState } from 'react';
import styles from './about.module.css';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { Footer } from '../../components/Footer';
import { menuData } from '../../App';
import { SideBar } from '../../components/SideBar';
import { Outlet } from 'react-router-dom';

export function About() {
  const [isSBOpen, setIsSBOpen] = useState(false);
  const homeMData = menuData.map((item) =>
    item.name === 'About' ? { ...item, isActive: true } : { ...item, isActive: false }
  );
  return (
    <>
      <Header menuData={homeMData} isSBOpen={isSBOpen} setIsSBOpen={setIsSBOpen} />
      <section className={styles.section1}>
        <Layout>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum harum
            praesentium! Rem soluta, possimus repudiandae quis corrupti error, nisi
            blanditiis qui iusto cumque vel! Reiciendis voluptates rem expedita! Non!e
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum harum
            praesentium! Rem soluta, possimus repudiandae quis corrupti error, nisi
            blanditiis qui iusto cumque vel! Reiciendis voluptates rem expedita! Non!e
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum harum
            praesentium! Rem soluta, possimus repudiandae quis corrupti error, nisi
            blanditiis qui iusto cumque vel! Reiciendis voluptates rem expedita! Non!e
          </p>
        </Layout>
        <SideBar isSBOpen={isSBOpen} menuData={homeMData} />
      </section>
      <Footer />
      <Outlet />
    </>
  );
}
