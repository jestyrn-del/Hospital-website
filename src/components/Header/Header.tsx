import type { HeaderProps } from '../../types';
import './Header.css';

export function Header({ onSearchOpen, onMenuOpen, onCreateRequest, onAccessibility }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="1602 ВКГ">
          <span className="brand__mark">✦</span>
          <span className="brand__text"><strong>1602</strong> ВКГ</span>
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          <a href="#patient">Пациентам</a>
          <a href="#about">О госпитале</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header__actions">
          <button className="icon-button" type="button" onClick={onSearchOpen} aria-label="Поиск">⌕</button>
          <button className="header__request" type="button" onClick={onCreateRequest}>Создать обращение</button>
          <button className="header__accessibility" type="button" onClick={onAccessibility}>Для слабовидящих</button>
          <button className="menu-button" type="button" onClick={onMenuOpen} aria-label="Открыть меню"><span /><span /></button>
        </div>
      </div>
    </header>
  );
}
