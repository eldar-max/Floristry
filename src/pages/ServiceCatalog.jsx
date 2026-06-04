import React from 'react';
import { useNavigate } from 'react-router-dom';// Импортируем хук для навигации
import styles from './ServiceСatalog.module.css'; 


const ServiceCatalog = ({ onSelectService }) => {
  const navigate = useNavigate();

  const allServices = [
    { id: "01", title: "БУКЕТ НЕВЕСТЫ И СВАДЕБНОЕ ОФОРМЛЕНИЕ", desc: "Полное флористическое сопровождение свадеб: от нежного букета невесты и бутоньерки до масштабного украшения залов, фотозон и выездных регистраций живыми цветами.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
    { id: "02", title: "БУКЕТЫ НА ТОРЖЕСТВА", desc: "Авторские композиции и премиальные букеты для дней рождения, юбилеев и важных дат. Индивидуальный подбор редких сортов под характер вашего праздника.", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800", price: "Цена зависит от состава" },
    { id: "03", title: "КОМПОЗИЦИИ", desc: "Стильные цветы в шляпных коробках, корзинах и декоративных ящиках на специальном оазисе. Идеальный готовый подарок, который не требует вазы.", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800", price: "Цена зависит от состава" },
    { id: "04", title: "ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ", desc: "Декорирование корпоративов, презентаций, бизнес-встреч и закрытых ужинов. Создаем правильный статус компании и атмосферу через природные элементы.", image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=800", price: "Расчет после замера" },
    { id: "05", title: "ДОСТАВКА ЦВЕТОВ", desc: "Бережная и оперативная доставка букетов в аквабоксах и специальных защитных боксах. Гарантия свежести каждого лепестка от мастерской до получателя.", image: "https://images.unsplash.com/photo-1582750433449-64935213f040?q=80&w=800", price: "От 500 руб." },
    { id: "06", title: "ФОТОСЕССИИ В НАШЕЙ ОРАНЖЕРЕЕ", desc: "Аренда атмосферного пространства среди редких тропических растений и интерьерной флористики для частных и коммерческих съемок.", image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800", price: "3 000 руб./час" },
    { id: "07", title: "КУРСЫ ПО ФЛОРИСТИКЕ", desc: "Обучающие программы для новичков и практикующих мастеров. Базовая теория колористики, сборка спиральной техники и секреты коммерческого ухода за срезом.", image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800", price: "15 000 руб." }
  ];

  // Умный обработчик клика по карточке услуги
  const handleServiceClick = (service) => {
    if (service.id === "01") {
      
      navigate('/wedding');
    } else {
 
      if (onSelectService) {
        onSelectService(service);
      }
    }
  };

  return (
    <div style={{ padding: '80px 20px', backgroundColor: '#1c1215', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', letterSpacing: '2px' }}>НАШИ УСЛУГИ</h1>
      <div style={{ width: '60px', height: '1px', backgroundColor: '#fff', margin: '20px auto' }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '40px auto 0' }}>
        {allServices.map(service => (
          <div 
            key={service.id} 
            onClick={() => handleServiceClick(service)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '0.9rem', opacity: 0.5, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px' }}>{service.id}</span>
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '220px', objectFit: 'cover', margin: '15px 0' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'normal', margin: '10px 0', lineHeight: '1.4' }}>{service.title}</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.6' }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCatalog;