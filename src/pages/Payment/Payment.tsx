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

export function PaidServices() {
  return (
    <div className='paid-page' id="top">
      <section className="paid-intro-main">
        <div className="container paid-intro-grid">
            <div className='paid-intro-left-part'>
                <h1>
                    <span className='title'>1602 ВКГ</span>
                    <span className='title title-green'>Платные услуги</span>
                </h1>

                <p className="paid-description">
                    По вопросам платных медицинских услуг обращаться в отделение
                    медицинского страхования. Находится на цокольном этаже
                    хирургического корпуса.
                </p>
            </div>

            <div className='paid-intro-down-part'>
                <button className='button-link' type='button'>
                    прейскурант
                </button>
            </div>

            <div className='paid-intro-right-part'>
                <div className="paid-info-card">
                    <h2>Режим работы</h2>
                    <p>Пн–Чт<br/>08:00–16:30</p>
                    <p>Пт<br/>08:00–15:30</p>
                </div>

                <div className="paid-info-card paid-info-card--phones">
                    <h2>Телефоны</h2>
                    <p>272–85–66<br/>272–83–66<br/>272–84–66</p>
                </div>
            </div>
        </div>
      </section>

      <div className="paid-decoration" aria-hidden="true" />

      <section className="paid-services-section">
        <div className="container">
            <h1><span className='title title-thin'>отделения с платными услугами</span></h1>
            <div className="paid-services-grid">
                {
                    services.map(
                        (service) => (
                            <div className="paid-service-card" key={service}>
                                <span>{service}</span>
                            </div>
                    ))
                }

                <div className='paid-service-card'>
                    <span>Магнитно-резонансной<br/>томографии</span>
                </div>

                <div className='paid-service-card'>
                    <span>Ультразвуковая диагностика</span>
                    <span>Компьютерная томография</span>
                </div>

                <div className='paid-service-card'>
                    <span>Челюстно-лицевой хирургии<br/>и стоматологии</span>
                </div>

                <div className='paid-service-card'>
                    <span>Врачебной экспертизы летного<br/>состава</span>
                </div>

                <div className='paid-service-card'>
                    <span>Гипер-(гипо) барической<br/>оксигенации</span>
                </div>

                <div className='paid-service-card'>
                    <span>Нефрологическое</span>
                    <span>с кабинетом гемодиализа</span>
                </div>

                <div className='paid-service-card'>
                    <span>Центр<br/>анестезиологии-реанимации</span>
                    <span>с кабинетом гипербарической<br/>оксигенации</span>
                </div>

                <div className='paid-service-card'>
                    <span>Хирургическое</span>
                    <span>неотложная хирургия<br/>абдоминальная хирургия</span>
                </div>

                <div className='paid-service-card'>
                    <span>Хирургическое</span>
                    <span>сосудистая хирургия<br/>гнойная хирургия<br/>нейрохирургическое отделение</span>
                </div>

                <div className='paid-service-card'>
                    <span>Общеклиническая диагностика</span>
                    <span>Биохимическая диагностика</span>
                </div>

                <div className='paid-service-card'>
                    <span>Иммунологическая диагностика</span>
                    <span>Бактериологическая диагностика</span>
                    <span>Гистологические исследования</span>
                </div>
            </div>
        </div>
      </section>

      <section className="paid-documents-section">
        <div className="container">
            <div className="paid-documents-column">
                <a className='base-link' href="#">Приказ об утверждении Положение о порядке и условиях предоставления платных медициснких услуг в ФКГУ «1602 ВКГ» Минобороны России</a>
                <a className='base-link' href="#">Положение о порядке и условиях предоставления платных медициснких услуг в ФКГУ «1602 ВКГ» Минобороны России</a>
                <a className='base-link' href="#">Порядок направления пациентов (маршрутизация пациентов) для оформления медицинской документации и госпитализации в 1602 ВКГ для оказания платных медицинских услуг</a>
                <a className='base-link' href="#">Положение об отделении медицинского страхования</a>
            </div>
        </div>
      </section>
    </div>
  );
}