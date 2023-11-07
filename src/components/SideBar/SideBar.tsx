import React from 'react';
import styles from './sidebar.module.css';
import cx from 'classnames';
import { MenuData, menuData } from '../../App';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  isSBOpen: boolean;
  setIsSBOpen: (st: boolean) => void;
  menuData: MenuData[];
}

export function SideBar({ isSBOpen, setIsSBOpen, menuData }: Props) {
  return (
    <ul className={cx(styles.sideBar, { [styles.dpNone]: !isSBOpen })}>
      {menuData.map((item) => (
        <li
          key={item.id}
          className={styles.li}
          onClick={() => {
            setIsSBOpen(false);
          }}
        >
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
      <li className={styles.li}>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}
