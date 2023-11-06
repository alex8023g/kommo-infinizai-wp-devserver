import React from 'react';
import styles from './button2.module.css';

export function Button2({ name }: { name: string }) {
  return <button className={styles.btn}>{name}</button>;
}
