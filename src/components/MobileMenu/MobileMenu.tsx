import { useEffect, useState } from 'react';

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
                    <a href="#patient" onClick={onClose}>
                        Пациентам
                        <span>↗</span>
                    </a>

                    <a href="#patient" onClick={onClose}>
                        Структура
                        <span>↗</span>
                    </a>

                    <a href="#about" onClick={onClose}>
                        О госпитале
                        <span>↗</span>
                    </a>

                    <a href="#contacts" onClick={onClose}>
                        Контакты
                        <span>↗</span>
                    </a>
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