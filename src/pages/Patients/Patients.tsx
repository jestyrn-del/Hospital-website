
import { useState } from 'react';
import './Patients.css';

const patientLinks = [
  {
    title: 'Правила записи на первичный прием',
    description:
      'Здесь размещается подробная информация о порядке записи на первичный прием, необходимых документах и способах записи.',
  },
  {
    title: 'Правила госпитализации',
    description:
      'Здесь размещается информация о порядке госпитализации, необходимых документах и подготовке к поступлению в стационар.',
  },
  {
    title: 'Права и обязанности граждан в сфере охраны здоровья',
    description:
      'Здесь размещается информация о правах и обязанностях граждан в сфере охраны здоровья.',
  },
  {
    title: 'Информация об оказываемой помощи',
    description:
      'Здесь размещается подробная информация о видах медицинской помощи, оказываемой госпиталем.',
  },
  {
    title: 'Программы бесплатной медицинской помощи',
    description:
      'Здесь размещается информация о программах бесплатного оказания медицинской помощи и условиях её получения.',
  },
  {
    title: 'Диспансеризация',
    description:
      'Здесь размещается информация о порядке прохождения диспансеризации и профилактических обследований.',
  },
  {
    title: 'Перечень жизненно-важных лекарств',
    description:
      'Здесь размещается актуальный перечень жизненно необходимых и важнейших лекарственных препаратов.',
  },
  {
    title: 'Другие лекарственные препараты',
    description:
      'Здесь размещается дополнительная информация о лекарственных препаратах.',
  },
];

export function Patients() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <div className='patients-page'>
      <section className="container patients-content">
        <div className="patients-decoration" aria-hidden="true" />

        <h1 className="paid-title">
            <span>1602 ВКГ</span>
            <span className="paid-title-green">пациентам</span>
        </h1>

        <div className="patients-links">
          {
            patientLinks.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `patients-content-${index}`;

              return (
                <div className={`patients-item${isOpen ? ' patients-item--open' : ''}`} key={item.title}>
                  <button className="patients-link" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => toggleItem(index)}>
                    <span className="patients-link-text">{item.title}</span>
                    <span className="patients-link-arrow" aria-hidden="true">↗</span>
                  </button>

                  <div className="patients-description" id={contentId} aria-hidden={!isOpen}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
          })}
        </div>
      </section>
    </div>
  );
}
