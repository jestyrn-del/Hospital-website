import './Vacancy.css';

import { Contacts } from '../../components/Contacts/Contacts';

import userImage from '../../assets/User-plus.svg';

export function Vacancy() {
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
          
          <p className='card'>
            <img src={userImage}/>Врач-хирург (эксперт
          </p>
          
          <p className='card'>
            <img src={userImage}/>Врач-хирург
          </p>
          
          <p className='card'>
            <img src={userImage}/>Медицинская сестра палатная (постовая) нейрохирургия
          </p>
          
          <p className='card'>
            <img src={userImage}/>
            <span>
              <p>Врач-анестезиолог реаниматолог</p>
              <p>2 вакансии</p>
            </span>
          </p>
          
          <p className='card'>
            <img src={userImage}/>Медицинская сестра анестезист
          </p>
          
          <p className='card'>
            <img src={userImage}/>Врач — гастроэнтеролог
          </p>
          
          <p className='card'>
            <img src={userImage}/>Врач функциональной диагностики
          </p>
          
          <p className='card'>
            <img src={userImage}/>Заведующий кабинетом<br/>врач-функциональной диагностики
          </p>
          
          <p className='card'>
            <img src={userImage}/>Врач-уролог
          </p>
          
          <p className='card'>
            <img src={userImage}/>Медицинская сестра палатная (постовая) неврология
          </p>
          
          <p className='card'>
            <img src={userImage}/>Медицинская сестра палатная (постовая) пульмонология
          </p>
          
          <p className='card'>
            <img src={userImage}/>Заведующий кабинетом<br/>врач-рентгенолог
          </p>
        </div>

        <Contacts />
      </section>
    </div>
  );
}