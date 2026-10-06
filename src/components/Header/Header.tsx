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

        <div className="header-actions">
          <button className="header-button" type="button" onClick={onSearchOpen} aria-label="поиск"><img src={searchLense} alt="Поиск"/></button>
          <button className="header-button header-not-mobile" type="button" onClick={onCreateRequest}>создать обращение</button>
          <button className="header-button header-not-mobile" type="button" onClick={onAccessibility}>для слабовидящих</button>
          <button className="header-button mobile-button" type="button" onClick={onMenuOpen} aria-label="открыть меню"><span/><span/></button>
        </div>
      </div>
    </header>
  );
}
