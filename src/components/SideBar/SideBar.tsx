import React from 'react';
import styles from './sidebar.module.css';
import cx from 'classnames';
import { MenuData, menuData } from '../../App';
import { Link } from 'react-router-dom';

interface Props {
  isSBOpen: boolean;
  menuData: MenuData[];
}

export function SideBar({ isSBOpen, menuData }: Props) {
  return (
    <ul className={cx(styles.sideBar, { [styles.dpNone]: !isSBOpen })}>
      {menuData.map((item) => (
        <li key={item.id} className={cx(styles.li, { [styles.active]: item.isActive })}>
          <Link to={item.href}>{item.name}</Link>
        </li>
      ))}
      <li className={styles.li}>Contact Us</li>
    </ul>
  );
}
