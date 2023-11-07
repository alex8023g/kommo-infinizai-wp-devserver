import React from 'react';
import styles from './notfound.module.css';
import { menuData } from '../../App';
import { SideBar } from '../../components/SideBar';
import { Layout } from '../../components/Layout';
import { Link } from 'react-router-dom';

export function NotFound({ isSBOpen }: { isSBOpen: boolean }) {
  return (
    <>
      <section className={styles.section1}>
        <Layout>
          <h2 className={styles.h2}>Ошибка 404, страница не найдена</h2>
          <Link to='/' className={styles.link}>
            На главную страницу
          </Link>
        </Layout>
      </section>
    </>
  );
}
