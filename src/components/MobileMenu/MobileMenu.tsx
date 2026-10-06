import type { MobileMenuProps } from '../../types';
import './MobileMenu.css';

export function MobileMenu({ open, onClose, onAppointment, onCreateRequest }: MobileMenuProps) {
  if (!open) return null;
  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Мобильное меню">
      <button className="mobile-menu__backdrop" type="button" onClick={onClose} aria-label="Закрыть меню" />
      <aside className="mobile-menu__panel">
        <button className="mobile-menu__close" type="button" onClick={onClose} aria-label="Закрыть">×</button>
        <nav className="mobile-menu__nav">
          <a href="#patient" onClick={onClose}>Пациентам</a>
          <a href="#about" onClick={onClose}>О госпитале</a>
          <a href="#contacts" onClick={onClose}>Контакты</a>
        </nav>
        <div className="mobile-menu__buttons">
          <button type="button" onClick={onAppointment}>Записаться на прием</button>
          <button type="button" onClick={onCreateRequest}>Пациентам</button>
        </div>
      </aside>
    </div>
  );
}
