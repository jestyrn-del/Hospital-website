import { useState, type FormEvent } from 'react';
import type { HomeProps, ReviewFormData } from '../../types';
import heroImage from '../../assets/home-hero-hospital.svg';

import aboutBanner from '../../assets/home-about-banner.svg';
import aboutStatsImg from '../../assets/home-about-stats-img.svg';

import patientMilitary from '../../assets/home-patient-military.svg';

import { Link } from 'react-router-dom';

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
              <Link to="/patients">Пациентам <span>↗</span></Link>
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
              <button className='button'>
                <Link to="/about">подробнее о госпитале</Link>
              </button>
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
              <Link to="/about">Подробная информация <span>↗</span></Link>
            </div>
            <div className='patient-links-bottom'>
              <Link to="/paid-services">Платные услуги <span>↗</span></Link>
              <Link to="/structure">Структура <span>↗</span></Link>
              <a onClick={onAppointment}>Создать обращение <span>↗</span></a>
            </div>
          </div>
          <div className='patient-decorations'>
            <div className='patient-dec-first'/>
            <div className='patient-dec-second'/>
            <div className='patient-dec-third'/>
          </div>
          <div className='patient-military'>
            <img src={patientMilitary}/>
          </div>
        </div>
      </section>

      <section className="contacts section" id="contacts">
        <div className="container">
          <div className="section-heading"><h2>Контакты</h2></div>
          <div className="contacts-grid">
            <div className="contacts-list">
              <a href="#contacts">1602 ВКГ <span>↗</span></a>
              <a href="#contacts">Страховые медицинские организации <span>↗</span></a>
              <a href="#contacts">Военная академия <span>↗</span></a>
              <a href="#contacts">Психологическая поддержка ВС РФ <span>↗</span></a>
              <span>344064, Ростовская обл., Ростов-на-Дону,<br/>ул. Дачная, д. 10</span>
            </div>
            <div className="map-placeholder"><span>КАРТА</span></div>
          </div>
        </div>
      </section>

      <section className="review section" id="review">
        <div className="container review-grid">
          <form className="review-form" onSubmit={submitReview}>
            <h2>Оставьте свой отзыв</h2>
            <div className='review-form-inputs'>
              <input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Имя" />
              <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email" />
            </div>
            <textarea required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Напишите отзыв по нашей работе. Ваш email будет скрыт для просмотра" rows={5} />
            <button className="button button--green" type="submit">оставить отзыв</button>
          </form>
        </div>
      </section>
    </div>
  );
}