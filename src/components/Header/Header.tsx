import type { HeaderProps } from '../../types';
import headerLogo from '../../assets/header-logo.svg';
import searchLense from '../../assets/search.svg';
import './Header.css';

export function Header({ onSearchOpen, onMenuOpen, onCreateRequest, onAccessibility }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className='header-logo'>
          <img src={headerLogo}/>
        </div>

        <nav className="header-navigation" aria-label="Основная навигация">
          <a href="#patient">Пациентам</a>
          <a href="#about">О госпитале</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header-actions">
          <button className="header-button" type="button" onClick={onSearchOpen} aria-label="поиск"><img src={searchLense} alt="Поиск"/></button>
          <button className="header-button" type="button" onClick={onCreateRequest}>создать обращение</button>
          <button className="header-button" type="button" onClick={onAccessibility}>для слабовидящих</button>
          <button className="mobile-button header-button" type="button" onClick={onMenuOpen} aria-label="открыть меню"><span/><span/></button>
        </div>
      </div>
    </header>
  );
}
