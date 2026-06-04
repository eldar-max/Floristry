import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ServiceDetail.module.css';


const servicesData = {
  wedding: {
    title: "Букет невесты и свадебное оформление",
    bgTitle: "WEDDING",
    description: "Мы создаем неповторимую атмосферу главного дня вашей жизни. От утонченного букета невесты до масштабного флористического декорирования банкетных залов и выездных регистраций. Каждый цветок подбирается строго под общую концепцию и цветовую палитру торжества.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
      "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=800",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800"
    ]
  },
  celebrations: {
    title: "Букеты на торжества",
    bgTitle: "CELEBRATE",
    description: "Авторские букеты для дней рождения, юбилеев и знаковых событий. Мы уходим от шаблонных решений, сочетая редкие сорта цветов, необычные фактуры и стильную премиальную упаковку, которая подчеркивает статус подарка.",
    images: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800",
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800",
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800"
    ]
  },
  
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);


  if (!service) {
    return (
      <div className={styles.notFound}>
        <h2>Услуга не найдена</h2>
        <Link to="/" className={styles.backLink}>Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <section className={styles.detailSection}>

      <Link to="/" className={styles.backBtn}>
        ← НАЗАД В КАТАЛОГ
      </Link>

      
      <div className={styles.titleContainer}>
        <h1 className={styles.bgTitle}>{service.bgTitle}</h1>
        <h1 className={styles.mainTitle}>{service.title}</h1>
      </div>

      <div className={styles.contentContainer}>
       
        <p className={styles.description}>{service.description}</p>
        
        <div className={styles.divider}></div>
        
        <button className={styles.orderButton}>ОБСУДИТЬ ШЕДЕВР</button>
      </div>

      
      <div className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>ГАЛЕРЕЯ НАШИХ РАБОТ</h3>
        <div className={styles.grid}>
          {service.images.map((url, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={url} alt={`${service.title} - пример ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;