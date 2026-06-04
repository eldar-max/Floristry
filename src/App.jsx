import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Link, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import ServiceCatalog from './components/ServiceСatalog/ServiceСatalog';
import PromoSection from './components/PromoSection/PromoSection';
import Compositions from './components/Compositions/Compositions';
import CustomConstructor from './components/CustomConstructor/CustomConstructor'; 
import GiftCards from './components/GiftCards/GiftCards';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

import WeddingPage from "./pages/WeddinPages/WeddingPages.jsx";
import GiftCardsPage from "./pages/GiftCardsPage/GiftCardsPage.jsx";
import Promotion from "./pages/PromotionPages/promotion.jsx";
import CompositionsPage from "./pages/CompositionsPage/CompositionsPage.jsx";
import PartnersPage from "./pages/PartnersPage/PartnersPage.jsx";
import Admin from "./pages/Admin/Admin.jsx"; 

const NotFoundPage = () => {
  return (
    <div style={{ width: '100%', minHeight: '80vh', backgroundColor: '#1c1215', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', color: '#fff', padding: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', margin: '0', color: '#ff8b94', fontWeight: 'bold', letterSpacing: '4px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '10px 0 20px 0', letterSpacing: '1px', textTransform: 'uppercase' }}>Страница не найдена</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '400px', marginBottom: '30px', lineHeight: '1.5' }}>
        Возможно, этот адрес устарел или страница была перемещена. Давайте вернемся на главную.
      </p>
      <Link to="/" style={{ padding: '14px 28px', backgroundColor: '#ff8b94', color: '#1c1215', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
        НА ГЛАВНУЮ
      </Link>
    </div>
  );
};

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleGmailLogin = (e) => {
    e.preventDefault();
    if (!email.toLowerCase().endsWith('@gmail.com')) return setError('Пожалуйста, используйте корректный адрес @gmail.com');
    if (password !== '123456') return setError('Неверный пароль! Попробуйте еще раз.'); 
    
    localStorage.setItem('userEmail', email);
    setIsAuthenticated(true);
    navigate('/admin');
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#1c1215', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', color: '#fff', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ backgroundColor: '#25181c', padding: '30px 20px', borderRadius: '12px', width: '100%', maxWidth: '400px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', boxSizing: 'border-box' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', display: 'block', marginBottom: '25px', textAlign: 'left' }}>← На главную</Link>
        <h2 style={{ color: '#ff8b94', margin: '0 0 20px 0', letterSpacing: '1px', fontSize: '1.3rem', fontWeight: 'bold' }}>ВХОД В СИСТЕМУ</h2>
        <form onSubmit={handleGmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="email" placeholder="your-email@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} style={loginInputStyle} />
          <input type="password" placeholder="Введите пароль" required value={password} onChange={(e) => setPassword(e.target.value)} style={loginInputStyle} />
          {error && <div style={{ color: '#ff6b6b', fontSize: '0.85rem', backgroundColor: 'rgba(255, 107, 107, 0.1)', padding: '10px', borderRadius: '6px', boxSizing: 'border-box' }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#ff8b94', color: '#1c1215', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>ВОЙТИ ЧЕРЕЗ GMAIL</button>
        </form>
      </div>
    </div>
  );
};

const loginInputStyle = { width: '100%', padding: '14px', backgroundColor: '#1c1215', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', textAlign: 'center', outline: 'none', boxSizing: 'border-box' };

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const CartModal = ({ cart, onClose, onRemoveItem, onClearCart }) => {
  const [step, setStep] = useState('cart'); 
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState('Доставка курьером');

  const total = cart.reduce((sum, item) => sum + ((parseInt(item.price?.toString().replace(/[^\d]/g, '') || '0', 10)) * item.quantity), 0);

  const handleSendOrder = async (e) => {
    e.preventDefault();
    if (!userName || !userPhone) return alert('Пожалуйста, заполните имя и телефон!');
    let goodsText = cart.map((item, i) => `${i + 1}. ${item.title} — ${item.quantity} шт. (${item.price})`).join('\n');
    const message = `<b>НОВЫЙ ЗАКАЗ!</b>\n<b>Имя:</b> ${userName}\n<b>Тел:</b> ${userPhone}\n<b>Тип:</b> ${deliveryType}\n\n<b>Товары:</b>\n${goodsText}\n<b>Итого:</b> ${total.toLocaleString()} руб.`;

    try {
      const response = await fetch(`https://api.telegram.org/bot8876197155:AAHHIYoEyFtk3qBS94ONfs2zfYa_lD8OoG8/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: '7722600881', text: message, parse_mode: 'HTML' })
      });
      if (response.ok) { alert('Заказ оформлен!'); onClearCart(); }
    } catch { alert('Ошибка соединения.'); }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '10px', boxSizing: 'border-box' }}>
      <div style={{ backgroundColor: '#25181c', padding: '20px', borderRadius: '12px', width: '100%', maxWidth: '440px', color: '#fff', maxHeight: '90vh', overflowY: 'auto', boxSizing: 'border-box' }}>
        {step === 'cart' ? (
          <div>
            <h2 style={{ color: '#ff8b94', fontSize: '1.2rem', marginBottom: '15px' }}>КОРЗИНА</h2>
            {cart.length === 0 ? <p style={{ opacity: 0.6 }}>Пусто</p> : (
              <div>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '5px' }}>
                    <div><h4 style={{ margin: '0 0 5px 0', fontSize: '0.95rem' }}>{item.title}</h4><p style={{ margin: 0, opacity: 0.7, fontSize: '0.85rem' }}>{item.quantity} шт. х {item.price}</p></div>
                    <button onClick={() => onRemoveItem(item.id)} style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', fontSize: '0.85rem' }}>Удалить</button>
                  </div>
                ))}
                <h3 style={{ margin: '20px 0 15px 0', fontSize: '1.1rem' }}>Итого: {total.toLocaleString()} руб.</h3>
                <button onClick={() => setStep('checkout')} style={{ width: '100%', padding: '12px', backgroundColor: '#fff', color: '#1c1215', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>ОФОРМИТЬ</button>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSendOrder}>
            <h2 style={{ color: '#ff8b94', fontSize: '1.2rem', marginBottom: '15px' }}>ДАННЫЕ ЗАКАЗА</h2>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required style={cartInputStyle} placeholder="Ваше имя" />
            <input type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required style={cartInputStyle} placeholder="Номер телефона" />
            <select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)} style={cartInputStyle}>
              <option value="Доставка курьером">Доставка курьером</option>
              <option value="Самовывоз из студии">Самовывоз из студии</option>
            </select>
            <div style={{ fontSize: '1.1rem', margin: '15px 0', color: '#ff8b94' }}>К оплате: {total.toLocaleString()} руб.</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setStep('cart')} style={{ flex: 1, padding: '10px', background: 'none', border: '1px solid #fff', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Назад</button>
              <button type="submit" style={{ flex: 2, padding: '10px', backgroundColor: '#ff8b94', border: 'none', color: '#1c1215', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>ОТПРАВИТЬ</button>
            </div>
          </form>
        )}
        <button onClick={onClose} style={{ marginTop: '15px', background: 'none', border: 'none', color: '#fff', opacity: 0.5, width: '100%', cursor: 'pointer' }}>Закрыть</button>
      </div>
    </div>
  );
};

const cartInputStyle = { width: '100%', padding: '10px', backgroundColor: '#1c1215', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', marginBottom: '10px', boxSizing: 'border-box', outline: 'none' };

const PurchaseModal = ({ service, onClose, onAddToCart }) => {
  const [qty, setQty] = useState(1);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '10px', boxSizing: 'border-box' }}>
      <div style={{ backgroundColor: '#25181c', padding: '20px', borderRadius: '12px', width: '100%', maxWidth: '400px', color: '#fff', boxSizing: 'border-box' }}>
        <h3 style={{ color: '#ff8b94', margin: '0 0 10px 0' }}>{service.title}</h3>
        <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.4' }}>{service.desc}</p>
        <p style={{ fontWeight: 'bold', margin: '15px 0' }}>Цена: {service.price}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0' }}>
          <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(q => q + 1)} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>+</button>
        </div>
        <button onClick={() => { onAddToCart(service, qty); onClose(); }} style={{ width: '100%', padding: '10px', backgroundColor: '#fff', color: '#1c1215', border: 'none', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>В КОРЗИНУ</button>
        <button onClick={onClose} style={{ marginTop: '10px', background: 'none', border: 'none', color: '#fff', width: '100%', opacity: 0.6, cursor: 'pointer' }}>Отмена</button>
      </div>
    </div>
  );
};

const FullServicesPage = ({ onSelectService, serviceOffers }) => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 15px', backgroundColor: '#1c1215', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
      <h1 style={{ textAlign: 'center', color: '#ff8b94', marginBottom: '20px' }}>НАШИ УСЛУГИ</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {serviceOffers.map(service => (
          <div key={service.id} onClick={() => {
            const t = service.title.toLowerCase();
            if (t.includes('свадеб') || service.id === "serv_01") navigate('/wedding');
            else if (t.includes('букет') || t.includes('композиц') || service.id === "serv_02") navigate('/compositions');
            else onSelectService(service);
          }} style={{ cursor: 'pointer', backgroundColor: '#25181c', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}><h3>{service.title}</h3><p style={{ opacity: 0.6 }}>{service.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainLanding = ({ onSelectService, compOffers, cardOffers, handleAddToCart, promoOffers, serviceOffers, partnerOffers }) => (
  <>
    <ServiceCatalog onSelectService={onSelectService} serviceOffers={serviceOffers} />
    <PromoSection onSelectService={onSelectService} promoOffers={promoOffers} />
    <Compositions onSelectService={onSelectService} compOffers={compOffers} />
    <CustomConstructor onAddToCart={handleAddToCart} />
    <GiftCards onSelectService={onSelectService} cardOffers={cardOffers} />
    <Partners partnerOffers={partnerOffers} />
  </>
);

const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('userEmail');
  });

  const createInitState = (key, fallback) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  };

  const [weddingOffers, setWeddingOffers] = useState(() => createInitState('wedding_offers_data', [
    { id: "wed_01", title: "ПАКЕТ «НЕЖНЫЙ КЛАССИК»", desc: "Букет невесты + бутоньерка жениха в подарок.", price: "7 500 руб.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
    { id: "wed_02", title: "ОФОРМЛЕНИЕ ПРЕЗИДИУМА НЕВЕСТЫ", desc: "Пышная цветочная композиция на стол молодых.", price: "15 000 руб.", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800" },
    { id: "wed_03", title: "ВЫЕЗДНАЯ РЕГИСТРАЦИЯ «ПОД КЛЮЧ»", desc: "Оформление арки, дорожка из лепестков роз.", price: "35 000 руб.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800" }
  ]));

  const [compOffers, setCompOffers] = useState(() => createInitState('comp_offers_data', [
    { id: "comp_01", title: "КОМПОЗИЦИЯ «ФЛАМИНГО»", desc: "Розовые гортензии в фирменной шляпной коробке.", price: "5 200 руб.", image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800", category: "birthday", color: "pink" },
    { id: "comp_02", title: "МОНОБУКЕТ ИЗ ПИОНОВ", desc: "21 отборный голландский пион с лентой.", price: "9 800 руб.", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800", category: "romantic", color: "pink" }
  ]));

  const [cardOffers, setCardOffers] = useState(() => createInitState('card_offers_data', [
    { id: "card_01", title: "КАРТА NOMINAL 3000", desc: "Подарочный сертификат на любые цветы студии.", price: "3 000 руб.", image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800" }
  ]));

  const [promoOffers, setPromoOffers] = useState(() => createInitState('promo_offers_data', [
    { id: "promo_01", title: "СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ", desc: "Подпишитесь на наши новости и получите промокод.", price: "Акция", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800" }
  ]));

  const [serviceOffers, setServiceOffers] = useState(() => createInitState('service_offers_data', [
    { id: "serv_01", title: "БУКЕТ НЕВЕСТЫ И СВАДЕБНОЕ ОФОРМЛЕНИЕ", desc: "Полное флористическое сопровождение свадеб.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
    { id: "serv_02", title: "БУКЕТЫ НА ТОРЖЕСТВА", desc: "Авторские композиции...", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800" }
  ]));

  const [partnerOffers, setPartnerOffers] = useState(() => createInitState('partner_offers_data', [
    { id: "part_01", title: "Свадебный салон «Gloss»", desc: "Наши official-партнеры по платьям.", price: "Партнер", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800" }
  ]));

  useEffect(() => {
    localStorage.setItem('wedding_offers_data', JSON.stringify(weddingOffers));
    localStorage.setItem('comp_offers_data', JSON.stringify(compOffers));
    localStorage.setItem('card_offers_data', JSON.stringify(cardOffers));
    localStorage.setItem('promo_offers_data', JSON.stringify(promoOffers));
    localStorage.setItem('service_offers_data', JSON.stringify(serviceOffers));
    localStorage.setItem('partner_offers_data', JSON.stringify(partnerOffers));
  }, [weddingOffers, compOffers, cardOffers, promoOffers, serviceOffers, partnerOffers]);

  const handleAddToCart = (service, quantity) => {
    setCart(prev => {
      const exist = prev.find(i => i.id === service.id);
      return exist ? prev.map(i => i.id === service.id ? { ...i, quantity: i.quantity + quantity } : i) : [...prev, { ...service, quantity }];
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: 'relative', overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<><Header /><MainLanding onSelectService={setSelectedService} compOffers={compOffers} cardOffers={cardOffers} promoOffers={promoOffers} serviceOffers={serviceOffers} partnerOffers={partnerOffers} handleAddToCart={handleAddToCart} /></>} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/services" element={<><Header /><FullServicesPage onSelectService={setSelectedService} serviceOffers={serviceOffers} /></>} />
          <Route path="/wedding" element={<><Header /><WeddingPage onSelectService={setSelectedService} weddingOffers={weddingOffers} /></>} />
          <Route path="/compositions" element={<><Header /><CompositionsPage onSelectService={setSelectedService} compOffers={compOffers} /></>} />
          <Route path="/gift-cards" element={<><Header /><GiftCardsPage onSelectService={setSelectedService} cardOffers={cardOffers} /></>} />
          <Route path="/promo" element={<><Header /><Promotion onSelectService={setSelectedService} promoOffers={promoOffers} /></>} />
          <Route path="/partners" element={<><Header /><PartnersPage partnerOffers={partnerOffers} /></>} />
          
          <Route path="/admin" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Admin weddingOffers={weddingOffers} setWeddingOffers={setWeddingOffers} compOffers={compOffers} setCompOffers={setCompOffers} cardOffers={cardOffers} setCardOffers={setCardOffers} promoOffers={promoOffers} setPromoOffers={setPromoOffers} serviceOffers={serviceOffers} setServiceOffers={setServiceOffers} partnerOffers={partnerOffers} setPartnerOffers={setPartnerOffers} />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<><Header /><NotFoundPage /></>} />
        </Routes>
        <Footer />
        <div onClick={() => setIsCartOpen(true)} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#ff8b94', color: '#1c1215', padding: '12px 20px', borderRadius: '50px', zIndex: 999, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '0.85rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span>КОРЗИНА ({cart.reduce((sum, i) => sum + i.quantity, 0)})</span>
        </div>
        {isCartOpen && <CartModal cart={cart} onClose={() => setIsCartOpen(false)} onRemoveItem={id => setCart(c => c.filter(i => i.id !== id))} onClearCart={() => { setCart([]); setIsCartOpen(false); }} />}
        {selectedService && <PurchaseModal service={selectedService} onClose={() => setSelectedService(null)} onAddToCart={handleAddToCart} />}
      </div>
    </Router>
  );
};

export default App;