import React from 'react';
import Styles from './footer.module.css';

export default function Footer(){
    let data = new Date();
    return (
      <div className={Styles.footer}>
        created_at {data.getFullYear()} &copy;
      </div>
    );
};