import { useState } from 'react';
import type { SearchOverlayProps } from '../../types';

import closeImage from '../../assets/close-cross.svg';
import searchImage from '../../assets/search.svg';

import './SearchOverlay.css';

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  if (!open) return null;
  const results = ['Инфо ОГРН', 'Инфо ИНН', 'Сведения о медицинской организации'];
  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Поиск">
      <button className="search-overlay-backdrop" type="button" onClick={onClose} aria-label="Закрыть поиск" />
      <div className="search-overlay-content">
        <button className="search-overlay-close" type="button" onClick={onClose} aria-label="Закрыть">
          <img src={closeImage}/>
        </button>

        <div className="search-field">
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ОГРН, ИНН" />
          <button className='search-layout-search-button' type='button'>
            <img src={searchImage}/>
          </button>
        </div>

        {
          query && <div className="search-results"> 
          {
            results.map((item) => 
              <button type="button" key={item}>{item}</button>
            )
          }
          </div>
        }
      </div>
    </div>
  );
}
