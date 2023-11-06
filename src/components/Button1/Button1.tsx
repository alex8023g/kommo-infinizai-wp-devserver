import React from 'react';
import styles from './button1.module.css';

export function Button1({ text }: { text: string }) {
  return <button className={styles.btn}>{text}</button>;
}
