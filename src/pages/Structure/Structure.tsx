import { useState } from 'react';
import './Structure.css';
// import aboutStatsImg from '../../assets/structure-banner.svg';

interface Department {
  index: number;
  deportament: string;
  vacation: string;
  rating: string;
  name: string;
  number: string;
}

interface Branch {
  fullName: string;
  adress: string;
  contacts: string[];
  table: Department[];
}

interface DepartmentInfo {
  name: string;
  head: string;
  phone: string;
  location: string;
}

const branches: Branch[] = [
  {
    fullName: "Филиал №1 (Центральный)",
    adress: "г. Москва, ул. Госпитальная, д. 15",
    contacts: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"],
    table: [
      { index: 1, deportament: "Терапевтическое отделение", vacation: "Ежедневно 08:00-20:00", rating: "Высшая", name: "Иванов И.И.", number: "120" },
      { index: 2, deportament: "Хирургическое отделение", vacation: "Пн-Пт 08:00-18:00", rating: "Первая", name: "Петров П.П.", number: "80" },
    ]
  },
  {
    fullName: "Филиал №2 (Северный)",
    adress: "г. Москва, Ленинградский пр-т, д. 45",
    contacts: ["+7 (495) 111-22-33"],
    table: [
      { index: 1, deportament: "Неврологическое отделение", vacation: "Пн-Сб 09:00-19:00", rating: "Высшая", name: "Сидоров С.С.", number: "60" }
    ]
  },
  {
    fullName: "Филиал №3 (Южный)",
    adress: "г. Москва, Варшавское ш., д. 120",
    contacts: ["+7 (495) 444-55-66"],
    table: []
  }
];

const departments: DepartmentInfo[] = [
  {
    name: "Терапевтическое отделение",
    head: "Иванов Иван Иванович",
    phone: "+7 (495) 123-45-67",
    location: "Корпус А, 2 этаж"
  },
  {
    name: "Хирургическое отделение",
    head: "Петров Петр Петрович",
    phone: "+7 (495) 123-45-68",
    location: "Корпус Б, 3 этаж"
  },
  {
    name: "Неврологическое отделение",
    head: "Сидоров Сидор Сидорович",
    phone: "+7 (495) 123-45-69",
    location: "Корпус В, 1 этаж"
  }
];

export function Structure() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openDepartmentIndex, setOpenDepartmentIndex] =
    useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  const toggleDepartment = (index: number) => {
    setOpenDepartmentIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <div className='structure-page'>
      <section className="container structure-content">
        <h1 className="structure-title">
          <span>1602 ВКГ</span>
          <span className="structure-title-green">пациентам</span>
        </h1>
        
        {/* <div className='structure-banner'>
          <img src={aboutStatsImg} alt="Структура госпиталя" />
        </div> */}

        <div className='structure-branches'>
          <h2 className='structure-title-thin'>ФИЛИАЛЫ</h2>
          <div className='structure-branches-grid'>
            {branches.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `structure-branches-element-${index}`;
              
              return (
                <div 
                  className={`structure-branches-item ${isOpen ? 'structure-branches-item--open' : ''}`} 
                  key={item.fullName || index}
                >
                  <button 
                    className="structure-branches-link" 
                    type="button" 
                    aria-expanded={isOpen} 
                    aria-controls={contentId} 
                    onClick={() => toggleItem(index)}
                  >
                    <span className="structure-branches-link-text">{item.fullName}</span>
                    <span className="structure-branches-link-arrow" aria-hidden="true">
                      {/* Базовая стрелка ↗. В CSS мы повернем её на 90deg (↘) и 180deg (↙) */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  
                  <div className="structure-branches-content" id={contentId} aria-hidden={!isOpen}>
                    <div className="structure-branches-details">
                      <div className="detail-row">
                        <span className="detail-label">Адрес:</span>
                        <span className="detail-value">{item.adress}</span>
                      </div>
                      
                      <div className="detail-row">
                        <span className="detail-label">Контакты:</span>
                        <div className="detail-value contacts-list">
                          {item.contacts.map((contact, i) => (
                            <span key={i}>{contact}</span>
                          ))}
                        </div>
                      </div>

                      {item.table && item.table.length > 0 && (
                        <div className="detail-row table-row">
                          <span className="detail-label">Отделения:</span>
                          <div className="detail-value">
                            <table className="departments-table">
                              <thead>
                                <tr>
                                  <th>№</th>
                                  <th>Отделение</th>
                                  <th>Режим работы</th>
                                  <th>Категория</th>
                                  <th>Зав. отделением</th>
                                  <th>Кол-во коек</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.table.map((row, i) => (
                                  <tr key={i}>
                                    <td>{row.index}</td>
                                    <td>{row.deportament}</td>
                                    <td>{row.vacation}</td>
                                    <td>{row.rating}</td>
                                    <td>{row.name}</td>
                                    <td>{row.number}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="structure-departments">
          <h2 className="structure-title-thin">ОТДЕЛЕНИЯ</h2>

          <div className="departments-grid">
            {departments.map((dept, index) => {
              const isOpen = openDepartmentIndex === index;
              const contentId = `department-content-${index}`;

              return (
                <article
                  className={`department-card ${
                    isOpen ? 'department-card--open' : ''
                  }`}
                  key={dept.name}
                >
                  <button
                    className="department-card-header"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleDepartment(index)}
                  >
                    <span className="department-card-title">
                      {dept.name}
                    </span>

                    <span
                      className="department-card-arrow"
                      aria-hidden="true"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="department-card-content"
                    id={contentId}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                  >
                    <div className="department-card-inner">
                      <div className="department-info-row">
                        <span className="department-info-label">
                          Заведующий:
                        </span>
                        <span className="department-info-value">
                          {dept.head}
                        </span>
                      </div>

                      <div className="department-info-row">
                        <span className="department-info-label">
                          Телефон:
                        </span>
                        <span className="department-info-value">
                          <a href={`tel:${dept.phone.replace(/\s/g, '')}`}>
                            {dept.phone}
                          </a>
                        </span>
                      </div>

                      <div className="department-info-row">
                        <span className="department-info-label">
                          Расположение:
                        </span>
                        <span className="department-info-value">
                          {dept.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}