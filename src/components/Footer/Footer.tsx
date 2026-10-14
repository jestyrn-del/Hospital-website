import headerLogo from '../../assets/header-logo.svg';
import './Footer.css';

import { Link } from 'react-router-dom';

export function Footer() {
    return (
    <footer className="footer">
        <div className="footer-decor"></div>

        <div className="container footer-inner">
            <div className="footer-logo">
                <img src={headerLogo} alt=""/>
            </div>

            <div className="footer-organization">
                Федеральное государственное казенное учреждение
                «1602 военный клинический госпиталь»
                Министерства обороны Российской Федерации

                <span className="footer-copyright">
                    © 1602 ВКГ 2026
                </span>
            </div>

            <div className="footer-column">
                <a href="#">записаться на прием</a>
                <Link to="/patients">Пациентам</Link>
                <Link to="/">Режим работы</Link>
            </div>

            <div className="footer-column">
                <a href="#">психологическая поддержка ВС РФ</a>
                <a href="#">военная академия</a>
                <a href="#">контакты</a>
                <a href="#">контролирующие органы</a>
            </div>

            <div className="footer-column">
                <div className="footer-address">
                    344064, Ростовская обл., г. Ростов-на-Дону,<br/>
                    ул. Дачная, д. 10
                </div>
            </div>
        </div>
    </footer>
  );
}