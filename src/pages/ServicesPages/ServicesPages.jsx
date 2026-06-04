import React from 'react';
import styles from './services.module.css';

const ServicesPage = () => {
  const allServices = [
    { id: "01", title: "БУКЕТ НЕВЕСТЫ И СВАДЕБНОЕ ОФОРМЛЕНИЕ", desc: "Полное флористическое сопровождение свадеб: от нежного букета невесты и бутоньерки до масштабного украшения залов, фотозон и выездных регистраций живыми цветами.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
    { id: "02", title: "БУКЕТЫ НА ТОРЖЕСТВА", desc: "Авторские композиции и премиальные букеты для дней рождения, юбилеев и важных дат. Индивидуальный подбор редких сортов под характер вашего праздника.", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800" },
    { id: "03", title: "КОМПОЗИЦИИ", desc: "Стильные цветы в шляпных коробках, корзинах и декоративных ящиках на специальном оазисе. Идеальный готовый подарок, который не требует вазы.", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800" },
    { id: "04", title: "ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ", desc: "Декорирование корпоративов, презентаций, бизнес-встреч и закрытых ужинов. Создаем правильный статус компании и атмосферу через природные элементы.", image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=800" },
    { id: "05", title: "ДОСТАВКА ЦВЕТОВ", desc: "Бережная и оперативная доставка букетов в аквабоксах и специальных защитных боксах. Гарантия свежести каждого лепестка от мастерской до получателя.", image: "https://images.unsplash.com/photo-1582750433449-64935213f040?q=80&w=800" },
    { id: "06", title: "ФОТОСЕССИИ В НАШЕЙ ОРАНЖЕРЕЕ", desc: "Аренда атмосферного пространства среди редких тропических растений и интерьерной флористики для частных и коммерческих съемок.", image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800" },
    { id: "07", title: "КУРСЫ ПО ФЛОРИСТИКЕ", desc: "Обучающие программы для новичков и практикующих мастеров. Базовая теория колористики, сборка спиральной техники и секреты коммерческого ухода за срезом.", image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800" }
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>НАШИ УСЛУГИ</h1>
      <div className={styles.titleDivider}></div>
      <div className={styles.servicesGrid}>
        {allServices.map(service => (
          <div key={service.id} className={styles.serviceItem}>
            <span className={styles.serviceNumber}>{service.id}</span>
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '220px', objectFit: 'cover', margin: '15px 0' }} />
            <h3 className={styles.serviceItemTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;