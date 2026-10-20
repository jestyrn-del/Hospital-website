import { useState, type FormEvent } from 'react';
import type { HomeProps, ReviewFormData } from '../../types';
import heroImage from '../../assets/home-hero-hospital.svg';

import heroShape from '../../assets/home-hero-shape.svg';
import heroShapes from '../../assets/home-hero-shapes.svg';



import aboutBanner from '../../assets/home-about-banner.svg';
import aboutStatsImg from '../../assets/home-about-stats-img.svg';

import patientMilitary from '../../assets/home-patient-military.svg';

import { Link } from 'react-router-dom';
import { Contacts } from '../../components/Contacts/Contacts';

import './Home.css';

export function Home({ onAppointment, onNotification, onCreateRequest, }: HomeProps) {
  const [form, setForm] = useState<ReviewFormData>({ name: '', email: '', message: '' });
  
  const svg = (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

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
    <div>
      <div className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1>
              <span className='title'>1602 ВКГ</span>
              <span className='title title-thin'>Квалифицированная помощь на высоком уровне</span>
            </h1>

            <p className="hero-description">Федеральное государственное казенное учреждение «1602 военный клинический госпиталь» министерства обороны Российской Федерации</p>
            
            <div className="hero-buttons">
              <a className="button-link" type="button" onClick={onAppointment}>Записаться на прием к руководителю</a>
              <a className="button-link" type="button" onClick={() => scrollToSection("patient")}>режим работы</a>
            </div>
          </div>

          <div className="hero-cards" aria-label="Разделы сайта">
            <div className='hero-image'>
              <img src={heroImage} alt='Госпиталь'/>
            </div>

            <div className='hero-links'>
              <Link className='base-link' to="/patients">Пациентам{svg}</Link>
              <Link className='base-link' to="/structure">Структура{svg}</Link>
              <Link className='base-link' to="/about">О госпитале{svg}</Link>
              <a className='base-link' onClick={() => scrollToSection("contacts")}>Контакты{svg}</a>
            </div>
          </div>

          <div className='hero-decoration'>
            <img className='hero-decoration-shapes' src={heroShapes}/>
            <img className='hero-decoration-shape' src={heroShape}/>
          </div>
        </div>
      </div>

      <div className="about section" id="about">
        <div className="container">
          <h1><span className='title title-thin'>О 1602 ВКГ</span></h1>
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
              <Link className='button-link' to="/about">подробнее о госпитале</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="patient section" id="patient">
        <div className="container">
          <div className="section-heading">
            <h1><span className='title title-thin'>Пациентам</span></h1>
          </div>
          <div className="patient-info">
            <div className="card">
              <span>Режим работы</span>
              <span>Каждый день, круглосуточно</span>
            </div>
            <div className="card">
              <span>Горячая линия</span>
              <span>+7 863 272-83-66</span>
              <span>факс 272 83 11</span>
            </div>
            <div className="card">
              <span>Психологическая поддержка ВС РФ</span>
              <span>8 800 550-67-98</span>
            </div>
          </div>
          <div className="patient-links">
            <div className='patient-links-top'>
              <button className='button-link' type="button" onClick={onAppointment}>Записаться на прием к руководителю{svg}</button>
              <Link className='button-link' to="/about">Подробная информация{svg}</Link>
            </div>
            <div className="patient-links-bottom">
                <Link className='button-link' to="/paid-services">Платные услуги{svg}</Link>
                <Link className='button-link' to="/structure">Структура{svg}</Link>
                <button className='button-link' type="button" onClick={onCreateRequest}>Создать обращение{svg}</button>
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
      </div>

      <Contacts />

      <div className="review section" id="review">
        <div className="container review-grid">
          <form className="review-form" onSubmit={submitReview}>
            <h2>Оставьте свой отзыв</h2>
            <div className='review-form-inputs'>
              <input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Имя" />
              <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email" />
            </div>
            <textarea required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Напишите отзыв по нашей работе. Ваш email будет скрыт для просмотра" rows={5} />
            <button className="button--green" type="submit">оставить отзыв</button>
          </form>
        </div>
      </div>
    </div>
  );
}