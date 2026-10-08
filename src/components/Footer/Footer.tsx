import headerLogo from '../../assets/header-logo.svg';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
        <div className="container footer__grid">
            <div className="footer__brand"><span className="brand__mark">✦</span><strong>1602 ВКГ</strong><p>ФГКУ «1602 военный клинический госпиталь» Министерства обороны Российской Федерации</p></div>
            <div><span className="footer__label">Навигация</span><a href="#patient">Пациентам</a><a href="#about">О госпитале</a><a href="#contacts">Контакты</a></div>
            <div><span className="footer__label">Адрес</span><p>344064, Ростовская обл.,<br />г. Ростов-на-Дону,<br />ул. Дачная, д. 10</p></div>
        </div>
        <div className="container footer__bottom"><span>© 1602 ВКГ 2026</span><a href="#top">Наверх ↑</a></div>
    </footer>
  );
}