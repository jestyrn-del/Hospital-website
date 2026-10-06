import { useState } from 'react';
import type { SearchOverlayProps } from '../../types';
import './SearchOverlay.css';

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  if (!open) return null;
  const results = ['Инфо ОГРН', 'Инфо ИНН', 'Сведения о медицинской организации'];
  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Поиск">
      <button className="search-overlay__backdrop" type="button" onClick={onClose} aria-label="Закрыть поиск" />
      <div className="search-overlay__content">
        <button className="search-overlay__close" type="button" onClick={onClose} aria-label="Закрыть">×</button>
        <div className="search-field"><span>⌕</span><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ОГРН, ИНН" /></div>
        {query && <div className="search-results">{results.map((item) => <button type="button" key={item}>{item}</button>)}</div>}
      </div>
    </div>
  );
}
