import { useRef } from "react";
import './AboutHospital.css';

import mainBanner from '../../assets/about-banner.svg';
import logoImage from '../../assets/header-logo.svg';
import moreImage from '../../assets/about-more-info.svg';
import newsImage from '../../assets/about-news-example.svg';

const news: NewsItem[] = [
  {
    id: 1,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
  {
    id: 2,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
  {
    id: 3,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
  {
    id: 4,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
    {
    id: 5,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
    {
    id: 6,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
  {
    id: 7,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
  {
    id: 8,
    date: "02.02.2026",
    title: "Новые препараты в стационаре 1602 ВКГ",
    image: newsImage,
  },
];

export function AboutHospital({ OpenNews }) {

    const svg = (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
    const newsRef = useRef<HTMLDivElement>(null);

    const scrollNews = (direction: "left" | "right") => {
      const container = newsRef.current;

      if (!container) return;

      const card = container.querySelector<HTMLElement>(".about-news-card");

      if (!card) return;

      const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
      const scrollAmount = card.offsetWidth + gap;

      container.scrollBy(
      {
        left: direction === "left" ? -scrollAmount : scrollAmount,behavior: "smooth",
      });
    };

  return (
    <section className="section">
      <div className="container">
          <h1 className="about-title">
              <span>1602 ВКГ</span>
              <span className="about-title-green about-title-thin">о госпитале</span>
          </h1>

          <div className="about-title-bunner">
            <img src={mainBanner}/>
          </div>
      </div>

      <div className="container about-description">
        <div className="about-description-text">
          <p>Федеральное государственное казённое учреждение «1602 военный клинический госпиталь» Министерства обороны Российской Федерации (ФГКУ «1602 ВКГ» МО РФ) сформирован 23 июня 1941 года.</p>
          <p>Является многопрофильным специализированным медицинским учреждением и головным для 18 госпиталей, 9 поликлиник, 1 лазарета и других медицинских учреждений, которые охватывают территорию всего Южного военного округа, в состав которого входят Республики: Адыгея, Дагестан, Ингушетия, Северная Осетия-Алания, Чеченская, Кабардино-Балкарская, Калмыкская, Карачаево‑Черкесская; Краснодарский и Ставропольский край; Ростовская, Волгоградская и Астраханская области.</p>
          <p>ФГКУ «1602 ВКГ» МО РФ является учебной базой для кафедр медицинских университетов и академий Южного Федерального округа.</p>
          <p>Сотрудники госпиталя бережно хранят героические традиции предшествующих поколений военных врачей. Многие врачи — специалисты госпиталя участвовали в проведении контртеррористической операции на северном Кавказе, имеют огромный опыт оказания специализированной медицинской помощи раненым и больным в военно-полевых условиях, а также располагают возможностями современного высокотехнологичного лечения больных и пострадавших в мирное время.</p>
          <p>В ФГКУ «1602 ВКГ» МО РФ развёрнуто и лицензировано более 50 лечебно-диагностических отделений, кабинетов, клинико-диагностических лабораторий и других подразделений. В госпитале успешно работает 209 врачей и провизоров (117 из них с высшей квалификационной категорией), 371 медицинских сестёр, 276 лиц младшего медицинского персонала, из которых: 2 доктора наук и 10 кандидатов медицинских наук, 1 кандидат фармацевтических наук, 9 заслуженных врачей Российской Федерации.</p>
        </div>
        <div className="about-description-image"> <img src={logoImage}/> </div>
      </div>

      <div className="container about-more">
        <div className="about-more-image">
          <img src={moreImage}/>
        </div>
        <div className="about-more-buttons">
          <button>История медецинской орагнизации{svg}</button>
          <button>Лицензии{svg}</button>
          <button>Стандарты медецнской помощи{svg}</button>
          <button>Показатели доступности качества медецины{svg}</button>
          <button>Медработники{svg}</button>
          <button>Вакансии{svg}</button>
        </div>
      </div>

      <div className="container about-stats-links">
        <span className="about-title-thin">сведения об организации</span>
        <div className='about-stats-links-links'>
          <a>Устав организации</a>
          <a>Положение об организации</a>
          <a>ИНН</a>
          <a>ОГРН</a>
          <a>Структура</a>
        </div>
      </div>

      <div className="container about-news">
        <div className="about-news-header">
          <span className="about-title-thin">новости</span>
        </div>

        <button className="about-news-nav-button about-news-nav-button-left" type="button" onClick={() => scrollNews("left")} aria-label="Предыдущая новость">←</button>
        <button className="about-news-nav-button about-news-nav-button-right" type="button" onClick={() => scrollNews("right")} aria-label="Следующая новость">→</button>

        <div className="about-news-cards" ref={newsRef}>
          {
            news.map((item) => {
              return (
                <div className="about-news-card" key={item.id}>
                  <span className="about-news-card-date">{item.date}</span>
                  <div className="about-news-card-image">
                    <img src={item.image} alt={item.title} loading="lazy"/>
                  </div>

                  <span className="about-news-card-title">{item.title}</span>

                  <div className="about-news-card-footer">
                    <button className="about-news-card-button" type="button" onClick={OpenNews}>
                      <span>читать</span> {svg}
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="about-contacts">
        <div className="container">
          <span className="about-title-thin">контакты</span>
          <div className="about-contacts-inner">
            <div className="about-contacts-data"> слева столбцы
              <a>1</a>
              <a>2</a>
              <a>3</a>
              <a>4</a>
              <a>5</a>
              <span>6 - текст с адресом</span>
            </div>
            <div className="about-contacts-map"> справа
              <span>карта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}