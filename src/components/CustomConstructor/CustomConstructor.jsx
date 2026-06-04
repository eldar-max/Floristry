import React, { useState } from 'react';
import styles from './CustomConstructor.module.css';

const CustomConstructor = ({ onAddToCart }) => {
  const [flowerType, setFlowerType] = useState('roses');
  const [quantity, setQuantity] = useState(15);
  const [wrapType, setWrapType] = useState('craft');

  const prices = {
    flowers: { roses: 180, peonies: 350, hydrangeas: 450, romashki: 120 },
    wraps: { craft: 200, film: 300, box: 800, none: 0 }
  };

  const names = {
    flowers: { roses: 'Розы', peonies: 'Пионы', hydrangeas: 'Гортензии', romashki: 'Ромашки' },
    wraps: { craft: 'Крафт-бумага', film: 'Дизайнерская пленка', box: 'Шляпная коробка', none: 'Без упаковки' }
  };

  const currentFlowerPrice = prices.flowers[flowerType] * quantity;
  const currentWrapPrice = prices.wraps[wrapType];
  const totalPrice = currentFlowerPrice + currentWrapPrice;

  const handleAddToBasket = () => {
    const customItem = {
      id: `custom_${Date.now()}`,
      title: `Свой букет: ${names.flowers[flowerType]} (${quantity} шт.)`,
      desc: `Упаковка: ${names.wraps[wrapType]}. Индивидуальный заказ через конструктор.`,
      price: `${totalPrice.toLocaleString()} руб.`
    };

    onAddToCart(customItem, 1);
    alert('Кастомный букет добавлен в корзину!');
  };

  return (
    <section className={styles['constructor-section']}>
      <div className={styles['constructor-card']}>
        
        <h2 className={styles.title}>ЦВЕТОЧНЫЙ КОНСТРУКТОР</h2>
        <p className={styles.subtitle}>Соберите свой идеальный букет, выбрав состав и оформление</p>

        <div className={styles['grid-layout']}>
          
          
          <div className={styles['left-panel']}>
            
           
            <div>
              <label className={styles['input-label']}>1. ВЫБЕРИТЕ ЦВЕТЫ:</label>
              <select value={flowerType} onChange={(e) => setFlowerType(e.target.value)} className={styles['select-field']}>
                <option value="roses">Премиум Розы (180 руб/шт)</option>
                <option value="peonies">Пионовидные розы / Пионы (350 руб/шт)</option>
                <option value="hydrangeas">Пышные Гортензии (450 руб/шт)</option>
                <option value="romashki">Полевые Ромашки (120 руб/шт)</option>
              </select>
            </div>

           
            <div>
              <label className={styles['input-label']}>
                2. КОЛИЧЕСТВО СТЕБЛЕЙ: <span className={styles['quantity-span']}>{quantity} шт.</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="101" 
                step="2" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                className={styles['range-slider']}
              />
              <div className={styles['range-labels']}>
                <span>1 цветок</span>
                <span>51</span>
                <span>101 шт.</span>
              </div>
            </div>

          
            <div>
              <label className={styles['input-label']}>3. УПАКОВКА БУКЕТА:</label>
              <div className={styles['wrap-grid']}>
                <button 
                  type="button" 
                  onClick={() => setWrapType('craft')} 
                  className={`${styles['tab-button']} ${wrapType === 'craft' ? styles['tab-button-active'] : ''}`}
                >
                  Крафт-бумага (+200р)
                </button>
                <button 
                  type="button" 
                  onClick={() => setWrapType('film')} 
                  className={`${styles['tab-button']} ${wrapType === 'film' ? styles['tab-button-active'] : ''}`}
                >
                  Матовая пленка (+300р)
                </button>
                <button 
                  type="button" 
                  onClick={() => setWrapType('box')} 
                  className={`${styles['tab-button']} ${wrapType === 'box' ? styles['tab-button-active'] : ''}`}
                >
                  Шляпная коробка (+800р)
                </button>
                <button 
                  type="button" 
                  onClick={() => setWrapType('none')} 
                  className={`${styles['tab-button']} ${wrapType === 'none' ? styles['tab-button-active'] : ''}`}
                >
                  Только лента (0р)
                </button>
              </div>
            </div>

          </div>

          {/* ПРАВАЯ ЧАСТЬ: КВИТАНЦИЯ */}
          <div className={styles['right-panel']}>
            <div>
              <h3 className={styles['receipt-title']}>ВАШ ЗАКАЗ:</h3>
              
              <div className={styles['receipt-row']}>
                <span>{names.flowers[flowerType]} ({quantity} шт.):</span>
                <span>{currentFlowerPrice.toLocaleString()} руб.</span>
              </div>

              <div className={styles['receipt-row']}>
                <span>Оформление ({names.wraps[wrapType]}):</span>
                <span>{currentWrapPrice.toLocaleString()} руб.</span>
              </div>
            </div>

            <div>
              <div className={styles['total-container']}>
                <span className={styles['total-label']}>ИТОГО:</span>
                <span className={styles['total-sum']}>{totalPrice.toLocaleString()} руб.</span>
              </div>

              <button onClick={handleAddToBasket} className={styles['order-button']}>
                ДОБАВИТЬ В КОРЗИНУ
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomConstructor;