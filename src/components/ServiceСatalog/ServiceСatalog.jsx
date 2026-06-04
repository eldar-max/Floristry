import React from 'react';
import styles from './ServiceCatalog.module.css';

const ServiceCatalog = ({ onSelectService }) => {
  return (
    <section className={styles.catalogSection}>
      
      <div className={styles.titleContainer}>
        <h2 className={styles.bgTitle}>КАТАЛОГ УСЛУГ</h2>
        <h2 className={styles.mainTitle}>КАТАЛОГ УСЛУГ</h2>
      </div>

      <div className={styles.grid}>
        
       
        <div className={`${styles.card} ${styles.card01}`}>
          <span className={styles.number}>01</span>
          <div className={styles.imageWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKF_OP1g8dEQ0p_tPWhQHBktHsoxowyhbdx_5DcJacTsMQyQK" alt="Свадебное оформление" />
          </div>
          <h3 className={styles.cardTitle}>БУКЕТ НЕВЕСТЫ И СВАДЕБНОЕ ОФОРМЛЕНИЕ</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "01",
              title: "БУКЕТ НЕВЕСТЫ И СВАДЕБНОЕ ОФОРМЛЕНИЕ",
              desc: "Полное флористическое сопровождение свадеб: от нежного букета невесты до масштабного украшения залов живыми цветами.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKF_OP1g8dEQ0p_tPWhQHBktHsoxowyhbdx_5DcJacTsMQyQK",
              price: "По запросу"
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>

       
        <div className={`${styles.card} ${styles.card02}`}>
          <span className={styles.number}>02</span>
          <div className={styles.imageWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShueIEe4kK5tR0mGhC7Fis8V3y7KOoSde12LVhILomzMwTPSAb" alt="Букеты на торжества" />
          </div>
          <h3 className={styles.cardTitle}>БУКЕТЫ НА ТОРЖЕСТВА</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "02",
              title: "БУКЕТЫ НА ТОРЖЕСТВА",
              desc: "Авторские композиции и премиальные букеты для дней рождения, юбилеев и важных дат.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShueIEe4kK5tR0mGhC7Fis8V3y7KOoSde12LVhILomzMwTPSAb",
              price: "от 3 500 руб."
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>

    
        <div className={`${styles.card} ${styles.card03}`}>
          <span className={styles.number}>03</span>
          <div className={styles.imageWrapperLarge}>
            <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600" alt="Композиции" />
          </div>
          <h3 className={styles.cardTitle}>КОМПОЗИЦИИ</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "03",
              title: "КОМПОЗИЦИИ",
              desc: "Стильные цветы в шляпных коробках, корзинах и декоративных ящиках на специальном оазисе.",
              image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600",
              price: "от 4 000 руб."
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>


        <div className={`${styles.card} ${styles.card04}`}>
          <span className={styles.number}>04</span>
          <div className={styles.imageWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTr8peJEYNr831rjCCayWsvylJ6_7F_T39660rDedVUvGUV8Y" alt="Оформление мероприятий" />
          </div>
          <h3 className={styles.cardTitle}>ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "04",
              title: "ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ",
              desc: "Декорирование корпоративов, презентаций, бизнес-встреч и закрытых ужинов живыми цветами.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTr8peJEYNr831rjCCayWsvylJ6_7F_T39660rDedVUvGUV8Y",
              price: "По запросу"
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>

   
        <div className={`${styles.card} ${styles.card05}`}>
          <div className={styles.badge}>4</div>
          <span className={styles.number}>05</span>
          <div className={styles.imageWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ogcPhpf2hDUVVQwJYGMCbZ96t_XvxnrVR4JV_t2BsylKS3_a" alt="Доставка цветов" />
          </div>
          <h3 className={styles.cardTitle}>ДОСТАВКА ЦВЕТОВ</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "05",
              title: "ДОСТАВКА ЦВЕТОВ",
              desc: "Бережная и оперативная доставка букетов в аквабоксах и специальных защитных боксах.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ogcPhpf2hDUVVQwJYGMCbZ96t_XvxnrVR4JV_t2BsylKS3_a",
              price: "500 руб."
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>

       
        <div className={`${styles.card} ${styles.card06}`}>
          <span className={styles.number}>06</span>
          <div className={styles.imageWrapper}>
            <img src="https://i.pinimg.com/236x/e8/f8/bf/e8f8bf3140366845b4e66bef1cdc5ead.jpg" alt="Фотосессии" />
          </div>
          <h3 className={styles.cardTitle}>ФОТОСЕССИИ В НАШЕЙ ОРАНЖЕРЕЕ</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "06",
              title: "ФОТОСЕССИИ В НАШЕЙ ОРАНЖЕРЕЕ",
              desc: "Аренда атмосферного пространства среди редких тропических растений для частных и коммерческих съемок.",
              image: "https://i.pinimg.com/236x/e8/f8/bf/e8f8bf3140366845b4e66bef1cdc5ead.jpg",
              price: "2 500 руб. / час"
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>

      
        <div className={`${styles.card} ${styles.card07}`}>
          <span className={styles.number}>07</span>
          <div className={styles.imageWrapper}>
            <img src="https://images.squarespace-cdn.com/content/v1/68d2c2657da44f2a1bffcb80/5bd1dc4a-c14d-43f0-839a-475d682900c4/Sucrebrut_folles_avoines_bordeaux_6419.jpg" alt="Курсы флористики" />
          </div>
          <h3 className={styles.cardTitle}>КУРСЫ ПО ФЛОРИСТИКЕ</h3>
          <button 
            className={styles.moreBtn}
            onClick={() => onSelectService({
              id: "07",
              title: "КУРСЫ ПО ФЛОРИСТИКЕ",
              desc: "Обучающие программы для новичков и практикующих мастеров. Базовая теория колористики и техники сборки.",
              image: "https://images.squarespace-cdn.com/content/v1/68d2c2657da44f2a1bffcb80/5bd1dc4a-c14d-43f0-839a-475d682900c4/Sucrebrut_folles_avoines_bordeaux_6419.jpg",
              price: "6 000 руб."
            })}
          >
            КУПИТЬ / ИЗУЧИТЬ
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceCatalog;