import { useState, type FormEvent } from 'react';
import type { HomeProps, ReviewFormData } from '../../types';
import heroImage from '../../assets/home-hero-hospital.svg';
import aboutBanner from '../../assets/home-about-banner.svg';
import aboutStatsImg from '../../assets/home-about-stats-img.svg';
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
              <img src={heroImage} alt='Госпиталь'/>
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
          <div className="section-heading">
            <h2>О 1602 ВКГ</h2>
          </div>
          <div className='about-banner'>
            <img src={aboutBanner}/>
          </div>
          <div className="about-text">
            <p>Федеральное государственное казённое учреждение «1602 военный клинический госпиталь» Министерства обороны Российской Федерации (ФГКУ «1602 ВКГ» МО РФ) сформирован 23 июня 1941 года. Является многопрофильным специализированным медицинским учреждением и головным для 18 госпиталей, 9 поликлиник, 1 лазарета и других медицинских учреждений, которые охватывают территорию всего Южного военного округа, в состав которого входят Республики: Адыгея, Дагестан, Ингушетия, Северная Осетия-Алания, Чеченская, Кабардино-Балкарская, Калмыкская, Карачаево‑Черкесская; Краснодарский и Ставропольский край; Ростовская, Волгоградская и Астраханская области.              </p>
          </div>
          <div className='about-stats'>
            <div className='about-stats-info'>
              <div className='about-stats-info-image'>
                <img src={aboutStatsImg}/>
              </div>
              <div className='about-stats-info-text'>
                <p>В ФГКУ «1602 ВКГ» МО РФ развёрнуто и лицензировано более 50 лечебно-диагностических отделений, кабинетов, клинико-диагностических лабораторий и других подразделений. В госпитале успешно работает 209 врачей и провизоров, 371 медицинских сестёр, 276 лиц младшего медицинского персонала</p>
              </div>
            </div>
            <div className='about-stats-decoration'/>
            <div className='about-stats-button'>
              <button>подробнее о госпитале</button>
            </div>
          </div>
        </div>
      </section>

      <section className="patient section" id="patient">
        <div className="container">
          <div className="section-heading">
            <h2>Пациентам</h2>
          </div>
          <div className="patient-info">
            <div className="info-card">
              <span className="info-card-title">Режим работы</span>
              <span className="info-card-value">Каждый день, круглосуточно</span>
            </div>
            <div className="info-card">
              <span className="info-card-title">Горячая линия</span>
              <span className="info-card-value">+7 863 272-83-66<br/>факс 272 83 11</span>
            </div>
            <div className="info-card">
              <span className="info-card-title">Психологическая поддержка ВС РФ</span>
              <span className="info-card-value">8 800 550-67-98</span>
            </div>
          </div>
          <div className="patient-links">
            <div className='patient-links-top'>
              <button type="button" onClick={onAppointment}>Записаться на прием к руководителю <span>↗</span></button>
              <a href="#contacts">Подробная информация <span>↗</span></a>
            </div>
            <div className='patient-links-bottom'>
              <a href="#about">Платные услуги <span>↗</span></a>
              <a href="#about">Структура <span>↗</span></a>
              <a href="#review">Создать обращение <span>↗</span></a>
            </div>
          </div>
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