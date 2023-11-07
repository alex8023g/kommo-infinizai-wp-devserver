import React from 'react';
import styles from './header.module.css';
import { Layout } from '../Layout';
import Logo from '../../img/logo.svg';
import Menu from '../../img/menu.svg';
import cx from 'classnames';
import classNames from 'classnames/bind';

import { Button1 } from '../Button1';
import { ShoppingCart } from '../ShoppingCart';
import { nanoid } from 'nanoid';
import { MenuData } from '../../App';
import { Link, NavLink } from 'react-router-dom';
import { SideBar } from '../SideBar';

export interface HeaderProps {
  menuData: MenuData[];
  isSBOpen: boolean;
  setIsSBOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ menuData, isSBOpen, setIsSBOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.buff1}></div>
          <ul className={styles.menuUl}>
            {menuData.map((item) => (
              <li
                className={cx(styles.menuA, { [styles.active]: item.isActive })}
                key={item.id}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.buff2}></div>
          <div className={styles.shoppingCart}>
            <ShoppingCart />
          </div>
          <Button1 text='Contact Us' />
          <button
            className={styles.menuIcon}
            onClick={() => {
              setIsSBOpen(!isSBOpen);
              console.log('click');
            }}
          >
            <Menu />
          </button>
        </div>
      </Layout>
      <SideBar isSBOpen={isSBOpen} setIsSBOpen={setIsSBOpen} menuData={menuData} />
    </header>
  );
}
