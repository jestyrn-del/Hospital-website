import type { PaymentProps } from '../../types';

import './Payment.css';

const services = [
  'Приемное',
  'Онкологическое',
  'Травматологическое',
  'Урологическое',
  'Отоларингологическое',
  'Офтальмологическое',
  'Гинекологическое',
  'Кардиологическое',
  'Пульмонологическое',
  'Гастроэнтерологическое',
  'Терапевтическое',
  'Неврологическое',
  'Психиатрическое',
  'Кожно-венерологическое',
  'Инфекционное',
  'Туберкулезное',
  'Функциональной диагностики',
  'Рентгенологическое',
  'Эндоскопическое',
  'Физиотерапевтическое',
  'Лечебной физкультуры',
];

export function PaidServices({ onNotification }: PaymentProps) {
  return (
    <main className="paid-page">
      <section className="paid-intro-main">
        <h1 className="paid-title">
          <span>1602 ВКГ</span>
          <span className="paid-title-green">ПЛАТНЫЕ УСЛУГИ</span>
        </h1>

        <p className="paid-description">
          По вопросам платных медицинских услуг обращаться в отделение
          медицинского страхования. Находится на цокольном этаже
          хирургического корпуса.
        </p>

        <a href="#" className="paid-price-button">
          прейскурант
        </a>
      </section>

      <section className="paid-info">
        <div className="paid-info-card">
          <h2>Режим работы</h2>

          <p>
            Пн–Чт
            <br />
            08:00–16:30
          </p>

          <p>
            Пт
            <br />
            08:00–15:30
          </p>
        </div>

        <div className="paid-info-card paid-info-card--phones">
          <h2>Телефоны</h2>

          <p>
            272–85–66
            <br />
            272–83–66
            <br />
            272–84–66
          </p>
        </div>
      </section>

      <div className="paid-decoration" aria-hidden="true" />

      <section className="paid-services-section">
        <h2 className="paid-section-title">
          ОТДЕЛЕНИЯ С ПЛАТНЫМИ УСЛУГАМИ
        </h2>

        <div className="paid-services-grid">
          {services.map((service) => (
            <a
              href="#"
              className="paid-service"
              key={service}
            >
              {service}
            </a>
          ))}

          <a href="#" className="paid-service paid-service--large">
            Магнитно-резонансной
            <br />
            томографии
          </a>

          <a href="#" className="paid-service paid-service--large">
            <strong>Ультразвуковая диагностика</strong>
            <strong>Компьютерная томография</strong>
          </a>

          <a href="#" className="paid-service paid-service--large">
            Челюстно-лицевой хирургии
            <br />
            и стоматологии
          </a>

          <a href="#" className="paid-service paid-service--large">
            Врачебной экспертизы летного
            <br />
            состава
          </a>

          <a href="#" className="paid-service paid-service--large">
            Гипер-(гипо) барической
            <br />
            оксигенации
          </a>

          <a href="#" className="paid-service paid-service--large">
            <strong>Нефрологическое</strong>
            <span>с кабинетом гемодиализа</span>
          </a>

          <a href="#" className="paid-service paid-service--xlarge">
            <strong>
              Центр
              <br />
              анестезиологии-реанимации
            </strong>
            <span>
              с кабинетом гипербарической
              <br />
              оксигенации
            </span>
          </a>

          <a href="#" className="paid-service paid-service--xlarge">
            <strong>Хирургическое</strong>
            <span>
              неотложная хирургия
              <br />
              абдоминальная хирургия
            </span>
          </a>

          <a href="#" className="paid-service paid-service--xlarge">
            <strong>Хирургическое</strong>
            <span>
              сосудистая хирургия
              <br />
              гнойная хирургия
              <br />
              нейрохирургическое отделение
            </span>
          </a>

          <a href="#" className="paid-service paid-service--xlarge">
            <strong>Общеклиническая диагностика</strong>
            <strong>Биохимическая диагностика</strong>
          </a>

          <a href="#" className="paid-service paid-service--xlarge">
            <strong>Иммунологическая диагностика</strong>
            <strong>Бактериологическая диагностика</strong>
            <strong>Гистологические исследования</strong>
          </a>
        </div>
      </section>

      <section className="paid-documents">
        <div className="paid-documents-column">
          <a href="#">
            Приказ об утверждении Положения о порядке и условиях
            предоставления платных медицинских услуг в ФКГУ
            «1602 ВКГ» Минобороны России
          </a>

          <a href="#">
            Положение о порядке и условиях предоставления платных
            медицинских услуг в ФКГУ «1602 ВКГ» Минобороны России
          </a>
        </div>

        <div className="paid-documents-column">
          <a href="#">
            Порядок направления пациентов (маршрутизация пациентов)
            для оформления медицинской документации и госпитализации
            в 1602 ВКГ для оказания платных медицинских услуг
          </a>

          <a href="#">
            Положение об отделении медицинского страхования
          </a>
        </div>
      </section>
    </main>
  );
}