import { Link } from 'react-router-dom';
import './Patients.css';

const patientLinks = [
  {
    title: 'Правила записи на первичный прием',
    href: '#appointment',
  },
  {
    title: 'Правила госпитализации',
    href: '#hospitalization',
  },
  {
    title: 'Права и обязанности граждан в сфере охраны здоровья',
    href: '#rights',
  },
  {
    title: 'Информация об оказываемой помощи',
    href: '#medical-care',
  },
  {
    title: 'Программы бесплатной медицинской помощи',
    href: '#free-medical-care',
  },
  {
    title: 'Диспансеризация',
    href: '#medical-examination',
  },
  {
    title: 'Перечень жизненно-важных лекарств',
    href: '#essential-medicines',
  },
  {
    title: 'Другие лекарственные препараты',
    href: '#other-medicines',
  },
];

export function Patients() {
  return (
    <main className="patients-page">
      <div className="patients-decoration" aria-hidden="true" />

      <section className="patients-content">
        <h1 className="patients-title">
          <span className="patients-title__number">1602 ВКГ</span>
          <span className="patients-title__accent">ПАЦИЕНТАМ</span>
        </h1>

        <nav className="patients-links" aria-label="Информация для пациентов">
          {patientLinks.map((item) => (
            <Link
              className="patients-link"
              to={item.href}
              key={item.title}
            >
              <span className="patients-link__text">
                {item.title}
              </span>

              <span
                className="patients-link__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}