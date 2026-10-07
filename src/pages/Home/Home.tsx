import { useState, type FormEvent } from 'react';
import type { HomeProps, ReviewFormData } from '../../types';
import heroImage from '../../assets/home-hero-hospital.svg';
import './Home.css';

export function Home({ onAppointment, onNotification }: HomeProps) {
  const [form, setForm] = useState<ReviewFormData>({ name: '', email: '', message: '' });
  
  const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
      });
  };

  const update = (field: keyof ReviewFormData, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const submitReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNotification('Спасибо! Ваш отзыв принят.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div id="top">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1>1602 ВКГ</h1>
            <p className="hero-lead">Квалифицированная помощь на высоком уровне</p>
            <p className="hero-description">Федеральное государственное казенное учреждение «1602 военный клинический госпиталь» министерства обороны Российской Федерации</p>
            <div className="hero-buttons">
              <button className="button" type="button" onClick={onAppointment}>Записаться на прием к руководителю</button>
              <button className="button" type="button" onClick={() => scrollToSection("patient")}>режим работы</button>
            </div>
          </div>

          <div className="hero-cards" aria-label="Разделы сайта">
            <div className='hero-image'>
              <img src={heroImage}/>
            </div>

            <div className='hero-links'>
              <a href="#patient">Пациентам <span>↗</span></a>
              <a href="#about">Структура <span>↗</span></a>
              <a href="#about">О госпитале <span>↗</span></a>
              <a href="#contacts">Контакты <span>↗</span></a>
            </div>
          </div>

          <div className='hero-decoration'>
            <div className='hero-decoration-part hero-decoration-up'/>
            <div className='hero-decoration-part hero-decoration-down'/>
            <div className='hero-decoration-part hero-decoration-right'/>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="section-heading"><span>01 / О ГОСПИТАЛЕ</span><h2>О 1602 ВКГ</h2></div>
          <div className="about__grid">
            <div className="about__text">
              <p>1602 военный клинический госпиталь — многопрофильное лечебно-профилактическое учреждение Министерства обороны Российской Федерации.</p>
              <p>История госпиталя неразрывно связана с развитием военной медицины. Сегодня здесь работают специалисты различных направлений, обеспечивающие диагностику, лечение и реабилитацию пациентов.</p>
              <p>Медицинская организация располагает современным оборудованием и объединяет более 50 подразделений, позволяя оказывать квалифицированную медицинскую помощь на высоком уровне.</p>
              <a className="text-link" href="#contacts">Подробнее о госпитале <span>→</span></a>
            </div>
            <div className="about__stats">
              <div className="stat"><strong>50+</strong><span>подразделений</span></div>
              <div className="stat"><strong>209</strong><span>врачей и провизоров</span></div>
              <div className="stat"><strong>371</strong><span>медицинская сестра</span></div>
              <div className="stat"><strong>276</strong><span>младшего медперсонала</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="patient section section--green" id="patient">
        <div className="container patient__grid">
          <div><div className="section-heading section-heading--light"><span>02 / ПАЦИЕНТАМ</span><h2>Помощь<br />рядом</h2></div><p className="patient__intro">Госпиталь работает для вас каждый день, круглосуточно.</p></div>
          <div className="patient__info">
            <div className="info-card"><span>Режим работы</span><strong>Каждый день,<br />круглосуточно</strong></div>
            <div className="info-card"><span>Горячая линия</span><strong>+7 863 272-83-66</strong><small>Факс: 272-83-11</small></div>
            <div className="info-card"><span>Психологическая поддержка ВС РФ</span><strong>8 800 550-67-98</strong></div>
          </div>
        </div>
        <div className="container patient__links">
          <button type="button" onClick={onAppointment}>Записаться на прием к руководителю <span>↗</span></button>
          <a href="#contacts">Подробная информация <span>↗</span></a>
          <a href="#about">Платные услуги <span>↗</span></a>
          <a href="#about">Структура <span>↗</span></a>
          <a href="#review">Оставить обращение <span>↗</span></a>
        </div>
      </section>

      <section className="contacts section" id="contacts">
        <div className="container">
          <div className="section-heading"><span>03 / КОНТАКТЫ</span><h2>Контакты</h2></div>
          <div className="contacts__grid">
            <div className="contacts__list">
              <a href="#contacts"><strong>1602 ВКГ</strong><span>Основная информация</span></a>
              <a href="#contacts"><strong>Страховые медицинские организации</strong><span>Информация для пациентов</span></a>
              <a href="#contacts"><strong>Военная академия</strong><span>Перейти к информации</span></a>
              <a href="#contacts"><strong>Психологическая поддержка ВС РФ</strong><span>Телефон горячей линии</span></a>
            </div>
            <div className="contacts__address"><span>Адрес</span><strong>344064, Ростовская обл.,<br />г. Ростов-на-Дону,<br />ул. Дачная, д. 10</strong><div className="map-placeholder"><span>КАРТА</span></div></div>
          </div>
        </div>
      </section>

      <section className="review section" id="review">
        <div className="container review__grid">
          <div className="section-heading"><span>04 / ОБРАТНАЯ СВЯЗЬ</span><h2>Оставьте<br />ваш отзыв</h2></div>
          <form className="review__form" onSubmit={submitReview}>
            <label>Имя<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Ваше имя" /></label>
            <label>Email<input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="example@mail.ru" /></label>
            <label>Сообщение<textarea required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Ваш отзыв" rows={5} /></label>
            <button className="button button--green" type="submit">Оставить отзыв <span>→</span></button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand"><span className="brand__mark">✦</span><strong>1602 ВКГ</strong><p>ФГКУ «1602 военный клинический госпиталь» Министерства обороны Российской Федерации</p></div>
          <div><span className="footer__label">Навигация</span><a href="#patient">Пациентам</a><a href="#about">О госпитале</a><a href="#contacts">Контакты</a></div>
          <div><span className="footer__label">Адрес</span><p>344064, Ростовская обл.,<br />г. Ростов-на-Дону,<br />ул. Дачная, д. 10</p></div>
        </div>
        <div className="container footer__bottom"><span>© 1602 ВКГ 2026</span><a href="#top">Наверх ↑</a></div>
      </footer>
    </div>
  );
}
