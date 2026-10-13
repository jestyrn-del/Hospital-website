
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

  const svg = (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

  const toggleItem = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <div className='patients-page'>
      <section className="container patients-content">
        <div className="patients-decoration" aria-hidden="true" />

        <h1>
          <span className='title'>1602 ВКГ</span>
          <span className='title title-green'>Пациентам</span>
        </h1>

        <div className="patients-links">
          {
            patientLinks.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `patients-content-${index}`;

              return (
                <div className={`patients-item${isOpen ? ' patients-item--open' : ''}`} key={item.title}>
				          <a className='patients-item-link base-link' onClick={() => toggleItem(index)}>{item.title}{svg}</a>

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
