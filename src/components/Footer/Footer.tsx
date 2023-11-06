import React from 'react';
import styles from './footer.module.css';
import { Layout } from '../Layout';
import Logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

const menuItems = [
  { id: '', name: 'About', to: '#' },
  { id: '', name: 'Blog', to: '#' },
  { id: '', name: 'Shop', to: '#' },
  { id: '', name: 'Contact Us', to: '#' },
].map((item) => ({ ...item, id: nanoid() }));

const pages = [
  { id: '', name: 'Styleguide', to: '#' },
  { id: '', name: 'Changelog', to: '#' },
  { id: '', name: 'Licenses', to: '#' },
  { id: '', name: 'Team', to: '#' },
].map((item) => ({ ...item, id: nanoid() }));
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.wrap}>
          <div className={styles.firsBlock}>
            <Logo />
            <p className={styles.p}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac
              sed turpis volutpat. Cursus sed massa non .
            </p>
          </div>
          <div className={styles.menuItems}>
            <h4 className={styles.h4}>Menu Items</h4>
            <ul>
              {menuItems.map(({ id, name, to }) => (
                <li className={styles.menuItem} key={id}>
                  <Link to={to}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.pages}>
            <h4 className={styles.h4}>Other Pages</h4>
            <ul>
              {pages.map(({ id, name, to }) => (
                <li className={styles.menuItem} key={id}>
                  <Link to={to}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
