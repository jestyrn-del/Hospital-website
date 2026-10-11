import { useLayoutEffect, useRef, useState  } from 'react';
import './Structure.css';
import aboutStatsImg from '../../assets/structure-banner.svg';

interface InnerArray {
  index: number;
  deportament: string;
  vacation: string;
  rating: string;
  name: string;
  number: string;
}

interface IArray {
  fullName: string;
  adress: string;
  contacts: string[];
  table: InnerArray[];
}

const branches: IArray[] = [
  {
    fullName: 'Филиал № 1 ФГКУ «1602 ВКГ» МО РФ',
    adress:
      'Адрес ВЛУ: 355005, г. Ставрополь, ул. Герцена, д. 102, территория военного клинического госпиталя, административный корпус.',
    contacts: [
      '+7 (8652) 12-34-56',
      '+7 (8652) 23-45-67',
    ],
    table: [
      {
        index: 1,
        deportament: 'Приёмное отделение',
        vacation: 'Начальник приёмного отделения',
        rating: 'Майор медицинской службы',
        name: 'Иванов Иван Иванович',
        number: '101',
      },
      {
        index: 2,
        deportament: 'Терапевтическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Петров Сергей Николаевич',
        number: '120',
      },
      {
        index: 3,
        deportament: 'Хирургическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Смирнов Алексей Викторович',
        number: '125',
      },
    ],
  },
  {
    fullName: 'Филиал № 2 — многопрофильный медицинский центр',
    adress: '355012, г. Ставрополь, ул. Ленина, д. 250.',
    contacts: [
      '+7 (8652) 11-11-11',
      '+7 (8652) 22-22-22',
      '+7 (8652) 33-33-33',
      '+7 (8652) 44-44-44',
      '+7 (8652) 55-55-55',
      '+7 (8652) 66-66-66',
      '+7 (8652) 77-77-77',
      '+7 (8652) 88-88-88',
    ],
    table: [
      {
        index: 1,
        deportament: 'Консультативно-диагностическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Сидоров Андрей Павлович',
        number: '205',
      },
      {
        index: 2,
        deportament: 'Кабинет функциональной диагностики',
        vacation: 'Начальник кабинета',
        rating: 'Капитан медицинской службы',
        name: 'Кузнецов Дмитрий Олегович',
        number: '208',
      },
    ],
  },
  {
    fullName: 'Филиал № 3 — диагностический пункт',
    adress: '355018, г. Ставрополь, ул. Мира, д. 18.',
    contacts: [],
    table: [],
  },
  {
    fullName: 'Филиал № 4 — городской клинический центр',
    adress: '355020, г. Ставрополь, ул. Дзержинского, д. 155.',
    contacts: [
      '+7 (8652) 90-10-10',
      '+7 (8652) 90-20-20',
    ],
    table: [
      {
        index: 1,
        deportament: 'Терапевтическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Иванов Илья Сергеевич',
        number: '110',
      },
      {
        index: 2,
        deportament: 'Хирургическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Петров Николай Андреевич',
        number: '120',
      },
      {
        index: 3,
        deportament: 'Неврологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Сидоров Павел Владимирович',
        number: '130',
      },
      {
        index: 4,
        deportament: 'Кардиологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Смирнова Елена Викторовна',
        number: '140',
      },
      {
        index: 5,
        deportament: 'Отделение функциональной диагностики',
        vacation: 'Начальник отделения',
        rating: 'Старший лейтенант медицинской службы',
        name: 'Кузнецов Михаил Игоревич',
        number: '150',
      },
    ],
  },
  {
    fullName: 'Филиал № 5 — центральный многопрофильный госпиталь',
    adress:
      '355005, г. Ставрополь, ул. Герцена, д. 102, корпус № 2, административное здание, вход со стороны внутреннего двора.',
    contacts: [
      '+7 (8652) 10-10-10',
      '+7 (8652) 20-20-20',
      '+7 (8652) 30-30-30',
      '+7 (8652) 40-40-40',
      '+7 (8652) 50-50-50',
    ],
    table: [
      {
        index: 1,
        deportament: 'Приёмное отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Иванов Иван Иванович',
        number: '101',
      },
      {
        index: 2,
        deportament: 'Терапевтическое отделение № 1',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Петров Сергей Николаевич',
        number: '102',
      },
      {
        index: 3,
        deportament: 'Терапевтическое отделение № 2',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Сидоров Андрей Павлович',
        number: '103',
      },
      {
        index: 4,
        deportament: 'Хирургическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Смирнов Алексей Викторович',
        number: '104',
      },
      {
        index: 5,
        deportament: 'Кардиологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Кузнецов Дмитрий Олегович',
        number: '105',
      },
      {
        index: 6,
        deportament: 'Неврологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Попов Михаил Александрович',
        number: '106',
      },
      {
        index: 7,
        deportament: 'Отделение медицинской реабилитации',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Васильев Павел Сергеевич',
        number: '107',
      },
      {
        index: 8,
        deportament: 'Отделение функциональной диагностики',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Морозов Дмитрий Иванович',
        number: '108',
      },
      {
        index: 9,
        deportament: 'Отделение лучевой диагностики',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Новиков Андрей Владимирович',
        number: '109',
      },
      {
        index: 10,
        deportament: 'Клинико-диагностическая лаборатория',
        vacation: 'Начальник лаборатории',
        rating: 'Подполковник медицинской службы',
        name: 'Фёдоров Николай Петрович',
        number: '110',
      },
      {
        index: 11,
        deportament: 'Офтальмологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Волков Сергей Андреевич',
        number: '111',
      },
      {
        index: 12,
        deportament: 'Оториноларингологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Алексеев Игорь Николаевич',
        number: '112',
      },
      {
        index: 13,
        deportament: 'Эндокринологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Лебедев Павел Игоревич',
        number: '113',
      },
      {
        index: 14,
        deportament: 'Урологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Семёнов Александр Викторович',
        number: '114',
      },
      {
        index: 15,
        deportament: 'Отделение анестезиологии и реанимации',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Егоров Дмитрий Сергеевич',
        number: '115',
      },
      {
        index: 16,
        deportament: 'Отделение интенсивной терапии',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Павлов Алексей Николаевич',
        number: '116',
      },
      {
        index: 17,
        deportament: 'Отделение медицинской профилактики',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Козлов Сергей Михайлович',
        number: '117',
      },
      {
        index: 18,
        deportament: 'Стоматологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Старший лейтенант медицинской службы',
        name: 'Степанов Иван Павлович',
        number: '118',
      },
      {
        index: 19,
        deportament: 'Отделение медицинской реабилитации',
        vacation: 'Начальник отделения',
        rating: 'Капитан медицинской службы',
        name: 'Николаев Андрей Сергеевич',
        number: '119',
      },
      {
        index: 20,
        deportament: 'Отделение восстановительного лечения',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Орлов Михаил Викторович',
        number: '120',
      },
    ],
  },
];

const departments: IArray[] = [
  {
    fullName: 'Администрация',
    adress:
      'Адрес ВЛУ: 355005, г. Ставрополь, ул. Герцена, д. 102, территория военного клинического госпиталя, административный корпус.',
    contacts: ['+7 (8652) 12-34-56'],
    table: [
      {
        index: 1,
        deportament: 'Администрация госпиталя',
        vacation: 'Начальник госпиталя',
        rating: 'Полковник медицинской службы',
        name: 'Смирнов Алексей Викторович',
        number: '875-415',
      },
      {
        index: 2,
        deportament: 'Организационно-методический отдел',
        vacation: 'Начальник отдела',
        rating: 'Подполковник медицинской службы',
        name: 'Иванов Сергей Николаевич',
        number: '875-416',
      },
    ],
  },
  {
    fullName: 'Лечебное отделение',
    adress:
      '355005, г. Ставрополь, ул. Герцена, д. 102, лечебный корпус, 2 этаж.',
    contacts: [
      '+7 (8652) 21-10-10',
      '+7 (8652) 21-10-11',
      '+7 (8652) 21-10-12',
    ],
    table: [
      {
        index: 1,
        deportament: 'Терапевтическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Петров Пётр Николаевич',
        number: '210',
      },
      {
        index: 2,
        deportament: 'Хирургическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Подполковник медицинской службы',
        name: 'Кузнецов Андрей Викторович',
        number: '212',
      },
      {
        index: 3,
        deportament: 'Кабинет функциональной диагностики',
        vacation: 'Начальник кабинета',
        rating: 'Капитан медицинской службы',
        name: 'Сидоров Дмитрий Сергеевич',
        number: '215',
      },
    ],
  },
  {
    fullName: 'Неврологическое отделение',
    adress:
      '355005, г. Ставрополь, ул. Герцена, д. 102, лечебный корпус, 3 этаж.',
    contacts: ['+7 (8652) 31-20-20'],
    table: [
      {
        index: 1,
        deportament: 'Неврологическое отделение',
        vacation: 'Начальник отделения',
        rating: 'Майор медицинской службы',
        name: 'Васильев Михаил Александрович',
        number: '305',
      },
    ],
  },
  {
    fullName: 'Диагностическое отделение',
    adress:
      '355005, г. Ставрополь, ул. Герцена, д. 102, диагностический корпус.',
    contacts: [],
    table: [],
  },
];


type FlipRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function useFlipGrid<T extends HTMLElement>(dependency: number | null) {
  const gridRef = useRef<T>(null);
  const previousRects = useRef(new Map<HTMLElement, FlipRect>());
  const animations = useRef(new WeakMap<HTMLElement, Animation>());

  const capturePositions = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const rects = new Map<HTMLElement, FlipRect>();

    Array.from(grid.children).forEach((child) => {
      const card = child as HTMLElement;
      const rect = card.getBoundingClientRect();

      rects.set(card, {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
    });

    previousRects.current = rects;
  };

  useLayoutEffect(() => {
    const grid = gridRef.current;
    const previous = previousRects.current;

    if (!grid || previous.size === 0) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      previous.clear();
      return;
    }

    Array.from(grid.children).forEach((child) => {
      const card = child as HTMLElement;
      const first = previous.get(card);

      if (!first) return;

      const last = card.getBoundingClientRect();

      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;

      const scaleX = last.width > 0 ? first.width / last.width : 1;

      if (
        Math.abs(deltaX) < 0.5 &&
        Math.abs(deltaY) < 0.5 &&
        Math.abs(scaleX - 1) < 0.005
      ) {
        return;
      }

      animations.current.get(card)?.cancel();

      const animation = card.animate(
        [
          {
            transform: `translate(${deltaX}px, ${deltaY}px) scaleX(${scaleX})`,
            transformOrigin: 'top left',
          },
          {
            transform: 'translate(0, 0) scaleX(1)',
            transformOrigin: 'top left',
          },
        ],
        {
          duration: 450,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      );

      animations.current.set(card, animation);
    });

    previous.clear();
  }, [dependency]);

  return {
    gridRef,
    capturePositions,
  };
}


export function Structure() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openDepartmentIndex, setOpenDepartmentIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    branchesFlip.capturePositions();

    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  const toggleDepartment = (index: number) => {
    departmentsFlip.capturePositions();

    setOpenDepartmentIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  const branchesFlip = useFlipGrid<HTMLDivElement>(openIndex);
  const departmentsFlip = useFlipGrid<HTMLDivElement>(openDepartmentIndex,);

  return (
    <div className='structure-page'>
      <section className="container structure-content">
        <h1 className="structure-title">
          <span>1602 ВКГ</span>
          <span className="structure-title-green">структура учреждения</span>
        </h1>
        
        <div className='structure-banner'>
          <img src={aboutStatsImg} alt="Структура госпиталя" />
        </div>

        <div className='structure-branches'>
          <h2 className='structure-title-thin'>ФИЛИАЛЫ</h2>
          <div className='structure-branches-grid' ref={branchesFlip.gridRef}>
            {branches.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `structure-branches-element-${index}`;
              
              return (
                <div className={`structure-branches-item ${isOpen ? 'structure-branches-item--open' : ''}`} key={item.fullName || index}>
                  <button className="structure-branches-link" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => toggleItem(index)}>
                    <span className="structure-branches-link-text">{item.fullName}</span>
                    <span className="structure-branches-link-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  
                  <div className="computer-element structure-branches-content" id={contentId} aria-hidden={!isOpen}>
                    <div className="structure-branches-details">
                      <div className="detail-row">
                        <span className="detail-value">{item.adress}</span>
                      </div>

                      <div className="detail-row">
                        <div className="detail-value contacts-list">
                          {
                            item.contacts.map((contact, i) => (
                              <span key={i}>{contact}</span>
                            ))
                          }
                        </div>
                      </div>

                      {item.table && item.table.length > 0 ? (
                        <div className="detail-row">
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
                      ) : (
                        <p className="department-empty">
                            Информация о подразделениях пока отсутствует.
                        </p>
                    )}
                    </div>
                  </div>

                  <div className="mobile-element structure-branches-content" id={contentId} aria-hidden={!isOpen}>
                    <div className="structure-branches-details">
                      <div className="detail-row">
                        <span className="detail-value">{item.adress}</span>
                      </div>

                      <div className="detail-row">
                        <div className="detail-value contacts-list">
                          {
                            item.contacts.map((contact, i) => (
                              <span key={i}>{contact}</span>
                            ))
                          }
                        </div>
                      </div>

                      {
                        item.table && item.table.length > 0 ? (
                          <div className="detail-row detail-row--cards">
                            {
                              item.table.map((row, i) => (
                                <div className='detail-row-card' key={i}>
                                    <div className='detail-row-card-index detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>№ п/п</div>
                                      <div className='deteil-row-card-item-value'>{row.index}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-rating detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Занимаемая должность</div>
                                      <div className='deteil-row-card-item-value'>{row.rating}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-vacation detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Воинское звание</div>
                                      <div className='deteil-row-card-item-value'>{row.vacation}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-name detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>ФИО</div>
                                      <div className='deteil-row-card-item-value'>{row.name}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-number detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Телефон</div>
                                      <div className='deteil-row-card-item-value'>{row.number}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-deportament detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Отделение</div>
                                      <div className='deteil-row-card-item-value'>{row.deportament}</div>
                                    </div>
                                </div>
                              ))
                            }
                          </div>
                        ) : (
                          <p className="department-empty">Информация о подразделениях пока отсутствует.</p>
                      )
                    }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="structure-departments">
          <h2 className="structure-title-thin">ОТДЕЛЕНИЯ</h2>

          <div className="departments-grid" ref={departmentsFlip.gridRef}>
            {departments.map((dept, index) => {
              const isOpen = openDepartmentIndex === index;
              const contentId = `department-content-${index}`;

              return (
                <article className={`department-card ${ isOpen ? 'department-card--open' : '' }`} key={dept.fullName} >
                  <button className="department-card-header" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => toggleDepartment(index)}>
                    <span className="department-card-title">{dept.fullName}</span>
                    <span className="department-card-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  <div className="computer-element department-card-content" id={contentId} aria-hidden={!isOpen} inert={!isOpen}>
                    <div className="department-card-inner">
                      <div className="detail-row">
                        <span className="department-detail-value">{dept.adress}</span>
                      </div>

                      <div className="detail-row">
                        <div className="department-detail-value contacts-list">
                          {dept.contacts.length > 0 ? (
                            dept.contacts.map((contact, i) => (
                              <a href={`tel:${contact.replace(/[^\d+]/g, '')}`} key={i}>{contact}</a>
                            ))
                          ) : (
                            <p className="department-empty">
                              Контактные телефоны не указаны.
                            </p>
                          )}
                        </div>
                      </div>

                        {dept.table.length > 0 ? (
                          <div className="detail-row">
                            <div className="detail-value">
                              <table className="departments-table">
                                <thead>
                                  <tr>
                                    <th>№</th>
                                    <th>Подразделение</th>
                                    <th>Должность</th>
                                    <th>Воинское звание</th>
                                    <th>ФИО</th>
                                    <th>Кабинет</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {dept.table.map((item) => (
                                    <tr key={item.index}>
                                      <td>{item.index}</td>
                                      <td>{item.deportament}</td>
                                      <td>{item.vacation}</td>
                                      <td>{item.rating}</td>
                                      <td>{item.name}</td>
                                      <td>{item.number}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ) : (
                          <p className="department-empty">
                            Информация о подразделениях пока отсутствует.
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="mobile-element department-card-content" id={contentId} aria-hidden={!isOpen}>
                    <div className="department-card-inner">
                      <div className="detail-row">
                        <span className="department-detail-value">{dept.adress}</span>
                      </div>

                      <div className="detail-row">
                        <div className="department-detail-value contacts-list">
                          {
                            dept.contacts.map((contact, i) => (
                              <span key={i}>{contact}</span>
                            ))
                          }
                        </div>
                      </div>

                      {
                        dept.table && dept.table.length > 0 ? (
                          <div className="detail-row detail-row--cards">
                            {
                              dept.table.map((row, i) => (
                                <div className='detail-row-card' key={i}>
                                    <div className='detail-row-card-index detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>№ п/п</div>
                                      <div className='deteil-row-card-item-value'>{row.index}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-rating detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Занимаемая должность</div>
                                      <div className='deteil-row-card-item-value'>{row.rating}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-vacation detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Воинское звание</div>
                                      <div className='deteil-row-card-item-value'>{row.vacation}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-name detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>ФИО</div>
                                      <div className='deteil-row-card-item-value'>{row.name}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-number detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Телефон</div>
                                      <div className='deteil-row-card-item-value'>{row.number}</div>
                                    </div>
                                    
                                    <div className='detail-row-card-deportament detail-row-card-item'>
                                      <div className='detail-row-card-item-label'>Отделение</div>
                                      <div className='deteil-row-card-item-value'>{row.deportament}</div>
                                    </div>
                                </div>
                              ))
                            }
                          </div>
                        ) : (
                          <p className="department-empty">Информация о подразделениях пока отсутствует.</p>
                      )
                    }
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