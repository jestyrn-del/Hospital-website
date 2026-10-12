import './Vacancy.css';

import userImage from '../../assets/User-plus.svg';

export function Vacancy() {
  const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
      });
  };

  return (
    <div className='about-page'>
      <section className="section">
        <div className="container">
            <h1>
              <span className='title'>1602 ВКГ</span>
              <span className='title title-green'>вакансии</span>
            </h1>
        </div>

        <div className="vacancy-description-little container">
          <span>о госпитале</span>
          <span><div className='vacancy-circle'/>вакансии</span>
        </div>
        
        <div className="vacancy-description-more container">
          <p>Присоединяйтесь к профессиональной команде 1602 ВКГ</p>
        </div>
        
        <div className="vacancy-list container">
          <p><img src={userImage}/>Врач-хирург (эксперт)</p>
          <p><img src={userImage}/>Врач-хирург</p>
          <p><img src={userImage}/>Медицинская сестра палатная (постовая) нейрохирургия</p>
          <p><img src={userImage}/>Врач-анестезиолог реаниматолог<br/>2 вакансии</p>
          <p><img src={userImage}/>Медицинская сестра анестезист</p>
          <p><img src={userImage}/>Врач — гастроэнтеролог</p>
          <p><img src={userImage}/>Врач функциональной диагностики</p>
          <p><img src={userImage}/>Заведующий кабинетом<br/>врач-функциональной диагностики</p>
          <p><img src={userImage}/>Врач-уролог</p>
          <p><img src={userImage}/>Медицинская сестра палатная (постовая) неврология</p>
          <p><img src={userImage}/>Медицинская сестра палатная (постовая) пульмонология</p>
          <p><img src={userImage}/>Заведующий кабинетом<br/>врач-рентгенолог</p>
        </div>

      <div className="about-contacts">
        <div className="container">
          <div className="about-title-thin"><span>Контакты</span></div>
          <div className="contacts-grid">
            <div className="contacts-list">
              <a onClick={() => scrollToSection("contacts")}>1602 ВКГ <span>↗</span></a>
              <a onClick={() => scrollToSection("contacts")}>Страховые медицинские организации <span>↗</span></a>
              <a onClick={() => scrollToSection("contacts")}>Военная академия <span>↗</span></a>
              <a onClick={() => scrollToSection("contacts")}>Психологическая поддержка ВС РФ <span>↗</span></a>
              <span>344064, Ростовская обл., Ростов-на-Дону,<br/>ул. Дачная, д. 10</span>
            </div>
            <div className="map-placeholder"><span>КАРТА</span></div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}