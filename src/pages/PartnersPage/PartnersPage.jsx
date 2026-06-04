import React from 'react';
import styles from './PartnersPage.module.css';

const PartnersPage = () => {
  
  const partners = [
    {
      id: 1,
      name: "",
      role: "",
      desc: "",
      logo: ""
    },
    {
      id: 2,
      name: "",
      role: "",
      desc: "",
      logo: ""
    },
    {
      id: 3,
      name: "",
      role: "",
      desc: "",
      logo: ""
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>НАШИ ПАРТНЕРЫ</h1>
      <div className={styles.underline}></div>
      <p className={styles.subtitle}></p>
      
      <div className={styles.grid}>
        {partners.map(partner => (
          <div key={partner.id} className={styles.card}>
            <div className={styles.logoWrapper}>
              <img src={partner.logo} alt={partner.name} className={styles.logo} />
            </div>
            <h3 className={styles.partnerName}>{partner.name}</h3>
            <span className={styles.role}>{partner.role}</span>
            <p className={styles.desc}>{partner.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;