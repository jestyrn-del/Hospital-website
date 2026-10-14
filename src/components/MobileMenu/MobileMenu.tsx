import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { MobileMenuProps } from '../../types';

import closeImage from '../../assets/close-cross.svg';

import './MobileMenu.css';

export function MobileMenu({
    open,
    onClose,
    onAppointment,
    onCreateRequest,
}: MobileMenuProps) {

    const [mounted, setMounted] = useState(open);

    useEffect(() => {
        if (open) {
            setMounted(true);
        }
    }, [open]);

    const handleAnimationEnd = () => {
        if (!open) {
            setMounted(false);
        }
    };

    const handleCreateRequest = () => {
        onClose();
        onCreateRequest();
    };

    if (!mounted) return null;

    const svg = (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

    return (
        <div
            className={`mobile-menu ${
                open
                    ? 'mobile-menu--open'
                    : 'mobile-menu--closing'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
            onAnimationEnd={handleAnimationEnd}
        >
            <button
                className="mobile-menu-backdrop"
                type="button"
                onClick={onClose}
                aria-label="Закрыть меню"
            />

            <aside className="mobile-menu-panel">

                <button
                    className="mobile-menu-close"
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть"
                >
                    <img src={closeImage} alt="" />
                </button>

                <h2>1602 ВКГ</h2>

                <nav className="mobile-menu-nav">
                    <Link className='base-link' onClick={onClose} to="/patients">Пациентам{svg}</Link>
                    <Link className='base-link' onClick={onClose} to="/structure">Структура{svg}</Link>
                    <Link className='base-link' onClick={onClose} to="/about">О госпитале{svg}</Link>
                    <a className='base-link' onClick={onClose}>Контакты{svg}</a>
                </nav>

                <div className="mobile-menu-buttons">

                    <button
                        type="button"
                        onClick={handleCreateRequest}
                    >
                        создать обращение
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            onClose();
                            onAppointment();
                        }}
                    >
                        записаться на приём
                    </button>

                </div>

            </aside>
        </div>
    );
}