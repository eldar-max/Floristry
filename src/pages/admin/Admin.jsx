import React, { useState } from 'react';
import styles from './Admin.module.css'; 

const Admin = ({ 
  weddingOffers, setWeddingOffers, 
  compOffers, setCompOffers, 
  cardOffers, setCardOffers,
  promoOffers, setPromoOffers,
  serviceOffers, setServiceOffers,
  partnerOffers, setPartnerOffers
}) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [activeTab, setActiveTab] = useState('wedding');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', desc: '', price: '', image: '' });

  const [isAdding, setIsAdding] = useState(false);
  const [newProductData, setNewProductData] = useState({ title: '', desc: '', price: '', image: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    const SECRET_PASSWORD = 'admin123'; 

    if (password === SECRET_PASSWORD) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Неверный пароль администратора!');
      setPassword('');
    }
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'wedding': 
        return { data: weddingOffers, setter: setWeddingOffers, prefix: 'wed', label: 'Свадьбы' };
      case 'compositions': 
        return { data: compOffers, setter: setCompOffers, prefix: 'comp', label: 'Композиции' };
      case 'cards': 
        return { data: cardOffers, setter: setCardOffers, prefix: 'card', label: 'Сертификаты' };
      case 'promotions': 
        return { data: promoOffers, setter: setPromoOffers, prefix: 'promo', label: 'Акции' };
      case 'services': 
        return { data: serviceOffers, setter: setServiceOffers, prefix: 'serv', label: 'Услуги' };
      case 'partners': 
        return { data: partnerOffers, setter: setPartnerOffers, prefix: 'part', label: 'Партнеры' };
      default: 
        return { data: weddingOffers, setter: setWeddingOffers, prefix: 'wed', label: 'Свадьбы' };
    }
  };

  const { data: currentOffers, setter: currentSetter, prefix: currentPrefix, label: currentLabel } = getCurrentData();

  const handleEdit = (offer) => {
    setEditingId(offer.id);
    setFormData({ title: offer.title, desc: offer.desc, price: offer.price || '', image: offer.image });
  };

  const handleSave = (id) => {
   
    let formattedPrice = formData.price;
    if (activeTab === 'partners') {
      formattedPrice = 'Партнер';
    } else if (activeTab === 'promotions' || activeTab === 'services') {
  
      formattedPrice = formData.price;
    } else if (formData.price && !formData.price.toLowerCase().includes('руб.')) {
      
      formattedPrice = `${formData.price} руб.`;
    }

    currentSetter(prev => prev ? prev.map(item => item.id === id ? { ...item, ...formData, price: formattedPrice } : item) : []);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот элемент?')) {
      currentSetter(prev => prev ? prev.filter(item => item.id !== id) : []);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewProductFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProductData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProductData.title) {
      alert('Пожалуйста, заполните хотя бы Название!');
      return;
    }

    const newId = `${currentPrefix}_${Date.now()}`; 
    
    
    let finalPrice = '';
    if (activeTab === 'partners') {
      finalPrice = 'Партнер';
    } else if (activeTab === 'promotions' || activeTab === 'services') {
     
      finalPrice = newProductData.price;
    } else {
     
      finalPrice = newProductData.price.toLowerCase().includes('руб.') 
        ? newProductData.price 
        : `${newProductData.price} руб.`;
    }

    const createdItem = {
      id: newId,
      title: newProductData.title,
      desc: newProductData.desc || 'Описание отсутствует',
      price: finalPrice,
      image: newProductData.image || 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800'
    };

    currentSetter(prev => prev ? [...prev, createdItem] : [createdItem]);
    setNewProductData({ title: '', desc: '', price: '', image: '' });
    setIsAdding(false);
  };

  if (!isAuthorized) {
    return (
      <div className={styles['login-wrapper']}>
        <div className={styles['login-card']}>
          <h2>ВХОД В АДМИНКУ</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Введите пароль" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles['input-field']} 
              style={{ marginBottom: '20px', textAlign: 'center' }}
            />
            {error && <div className={styles['error-message']}>{error}</div>}
            <button type="submit" className={`${styles.btn} ${styles['btn-primary']}`} style={{ width: '100%' }}>
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['admin-wrapper']}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h1 className={styles.title} style={{ margin: 0, textAlign: 'left' }}>ПАНЕЛЬ АДМИНИСТРАТОРА</h1>
        <button onClick={() => setIsAuthorized(false)} className={`${styles.btn} ${styles['btn-secondary']}`} style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
          Выйти
        </button>
      </div>
      <div className={styles.divider}></div>

      {/* ТАБЫ */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
        {['wedding', 'compositions', 'cards', 'promotions', 'services', 'partners'].map((tab) => {
          const labels = {
            wedding: 'Свадьбы',
            compositions: 'Композиции',
            cards: 'Сертификаты',
            promotions: 'Акции',
            services: 'Услуги',
            partners: 'Партнеры'
          };
          return (
            <button 
              key={tab}
              onClick={() => { setActiveTab(tab); setEditingId(null); setIsAdding(false); }} 
              className={`${styles.btn} ${activeTab === tab ? styles['btn-primary'] : styles['btn-secondary']}`}
            >
              {labels[tab]}
            </button>
          );
        })}
      </div>

      {!isAdding ? (
        <button 
          onClick={() => setIsAdding(true)} 
          className={`${styles.btn} ${styles['btn-primary']}`} 
          style={{ width: '100%', marginBottom: '30px', padding: '14px', fontSize: '1rem', letterSpacing: '1px' }}
        >
          + ДОБАВИТЬ В РАЗДЕЛ "{currentLabel.toUpperCase()}"
        </button>
      ) : (
        <div className={styles['add-new-block']}>
          <h3>Новый элемент для раздела "{currentLabel}"</h3>
          <form onSubmit={handleCreateProduct}>
            <label className={styles['input-label']}>Название *</label>
            <input type="text" name="title" value={newProductData.title} onChange={handleNewProductChange} placeholder="Введите название..." className={styles['input-field']} required />
            
            <label className={styles['input-label']}>Описание</label>
            <textarea name="desc" value={newProductData.desc} onChange={handleNewProductChange} placeholder="Введите описание..." className={styles['textarea-field']} />
            
            {activeTab !== 'partners' && (
              <>
                <label className={styles['input-label']}>
                  {activeTab === 'promotions' || activeTab === 'services' ? 'Текст бейджа / Подпись (например: Акция, Скидка 10%) *' : 'Цена *'}
                </label>
                <input type="text" name="price" value={newProductData.price} onChange={handleNewProductChange} placeholder={activeTab === 'promotions' ? "Например: Скидка 30%" : "Например: 4 500"} className={styles['input-field']} required />
              </>
            )}
            
            <label className={styles['input-label']}>Загрузить фото</label>
            <label className={styles['file-upload-label']}>
              {newProductData.image ? '✓ Фотография успешно выбрана' : '📁 Нажмите для выбора фото'}
              <input type="file" accept="image/*" onChange={handleNewProductFileChange} className={styles['file-input']} />
            </label>

            {newProductData.image && (
              <img src={newProductData.image} alt="Превью" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px', display: 'block' }} />
            )}

            <div className={styles['button-group']}>
              <button type="submit" className={`${styles.btn} ${styles['btn-primary']}`}>Создать и опубликовать</button>
              <button type="button" onClick={() => { setIsAdding(false); setNewProductData({ title: '', desc: '', price: '', image: '' }); }} className={`${styles.btn} ${styles['btn-secondary']}`}>Отмена</button>
            </div>
          </form>
        </div>
      )}

      <div className={styles['panel-card']}>
        <h2 className={styles['panel-title']}>Текущие позиции: {currentLabel}</h2>

        {currentOffers && currentOffers.map(offer => (
          <div key={offer.id} className={styles['offer-row']}>
            {editingId === offer.id ? (
              <div className={styles['edit-form']}>
                <label className={styles['input-label']}>Название:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className={styles['input-field']} />
                
                <label className={styles['input-label']}>Описание:</label>
                <textarea name="desc" value={formData.desc} onChange={handleChange} className={styles['textarea-field']} />
                
                {activeTab !== 'partners' && (
                  <>
                    <label className={styles['input-label']}>Цена / Текст:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} className={styles['input-field']} />
                  </>
                )}
                
                <label className={styles['input-label']}>Фотография:</label>
                <label className={styles['file-upload-label']}>
                  {formData.image?.startsWith('data:image') ? '✓ Фотография загружена' : '📁 Выбрать новое фото'}
                  <input type="file" accept="image/*" onChange={handleFileChange} className={styles['file-input']} />
                </label>

                {formData.image && (
                  <img src={formData.image} alt="Превью" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px', display: 'block' }} />
                )}
                
                <div className={styles['button-group']}>
                  <button onClick={() => handleSave(offer.id)} className={`${styles.btn} ${styles['btn-primary']}`}>Сохранить</button>
                  <button onClick={() => setEditingId(null)} className={`${styles.btn} ${styles['btn-secondary']}`}>Отмена</button>
                </div>
              </div>
            ) : (
              <div className={styles['view-container']}>
                <div className={styles['info-block']}>
                  <img src={offer.image} alt="" className={styles['preview-img']} />
                  <div className={styles['offer-info']}>
                    <h4>{offer.title}</h4>
                    {activeTab !== 'partners' && <p>{offer.price}</p>}
                  </div>
                </div>
                
                <div className={styles['button-group']} style={{ margin: 0 }}>
                  <button onClick={() => handleEdit(offer)} className={`${styles.btn} ${styles['btn-edit']}`}>Редактировать</button>
                  <button onClick={() => handleDelete(offer.id)} className={`${styles.btn} ${styles['btn-delete']}`}>Удалить</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;