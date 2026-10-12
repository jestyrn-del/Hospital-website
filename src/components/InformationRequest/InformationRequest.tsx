import { useEffect, useId, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import './InformationRequest.css';

import type { InformationRequestProps } from '../../types';

interface RequestFormData {
    fullName: string;
    birthDate: string;
    phone: string;
    email: string;
}

type RequestStep = 1 | 2 | 3 | 4;

type FormErrors = Partial<Record<keyof RequestFormData, string>>;

const INITIAL_FORM_DATA: RequestFormData = {
    fullName: '',
    birthDate: '',
    phone: '',
    email: '',
};

const DEMO_MODE = import.meta.env.DEV;

function formatBirthDate(date: string): string {
    if (!date) return '';

    const [year, month, day] = date.split('-');

    return `${day}.${month}.${year}`;
}

function validateForm(data: RequestFormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.fullName.trim()) errors.fullName = 'Введите ФИО';

    if (!data.birthDate) errors.birthDate = 'Укажите дату рождения';
    else {
        const today = new Date();
        const [year, month, day] = data.birthDate.split('-').map(Number);
        const selectedDate = new Date(year, month - 1, day);

        if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month - 1 || selectedDate.getDate() !== day)
            errors.birthDate = 'Введите корректную дату';
        else if (selectedDate > today) 
            errors.birthDate = 'Дата рождения не может быть в будущем';
    }

    const phoneDigits = data.phone.replace(/\D/g, '');

    if (phoneDigits.length < 10 || phoneDigits.length > 15) errors.phone = 'Введите корректный номер телефона';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Введите корректный E-mail';

    return errors;
}

export function InformationRequest({ open, onClose, }: InformationRequestProps) {
    const [step, setStep] = useState<RequestStep>(1);

    const [formData, setFormData] = useState<RequestFormData>({
        ...INITIAL_FORM_DATA,
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const [verificationCode, setVerificationCode] = useState('');
    const [codeError, setCodeError] = useState('');

    const [requestMessage, setRequestMessage] = useState('');
    const [requestError, setRequestError] = useState('');

    const [authMessage, setAuthMessage] = useState('');

    const [demoNotice, setDemoNotice] = useState('');


    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const titleId = useId();


    const resetForm = () => {
        setStep(1);

        setFormData({ ...INITIAL_FORM_DATA });
        setErrors({});

        setVerificationCode('');
        setCodeError('');

        setRequestMessage('');
        setRequestError('');

        setAuthMessage('');
        setDemoNotice('');
    };


    const handleClose = () => {
        resetForm();
        onClose();
    };

 
    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        const previouslyFocusedElement = document.activeElement;

        document.body.style.overflow = 'hidden';

        const focusFrame = window.requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                handleClose();
                return;
            }

            if (event.key !== 'Tab') return;

            const dialog = dialogRef.current;

            if (!dialog) return;

            const focusableElements = Array.from(
                dialog.querySelectorAll<HTMLElement>(
                    'button:not([disabled]), ' +
                    'input:not([disabled]), ' +
                    'textarea:not([disabled]), ' +
                    'a[href], ' +
                    '[tabindex]:not([tabindex="-1"])'
                )
            );

            if (!focusableElements.length) return;

            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } 
            else if (!event.shiftKey &&document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            window.cancelAnimationFrame(focusFrame);
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);

            if (previouslyFocusedElement instanceof HTMLElement) {
                previouslyFocusedElement.focus();
            }
        };
    }, [open]);

    const updateField = (field: keyof RequestFormData, value: string) =>
    {
        setFormData((previous) => 
        ({
            ...previous,
            [field]: value,
        }));

        setErrors((previous) => 
        ({
            ...previous,
            [field]: undefined,
        }));
    };

    const handlePersonalDataSubmit = (event: FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();

        const newErrors = validateForm(formData);

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setDemoNotice(
            DEMO_MODE ? 'Демонстрационный режим: код подтверждения не отправляется.' : ''
        );

        setStep(2);
    };

    const handleGosuslugiAuth = () => {
        setAuthMessage('Для авторизации через Госуслуги необходимо подключить ЕСИА.');
    };

    const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '').slice(0, 6);

        setVerificationCode(value);
        setCodeError('');
    };

    const handleCodeSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (verificationCode.length !== 6) {
            setCodeError('Введите код из 6 цифр');
            return;
        }

        if (DEMO_MODE) {
            setDemoNotice('Демонстрационный режим: код не проверялся сервером.');

            setStep(3);
            return;
        }

        setCodeError('Проверка кода пока недоступна. Необходимо подключить сервер.');
    };

    const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!requestMessage.trim()) {
            setRequestError('Опишите ваш запрос');
            return;
        }

        setRequestError('');

        if (DEMO_MODE) {
            setDemoNotice('Демонстрационный режим: запрос не отправлен.');

            setStep(4);
            return;
        }

        setRequestError('Отправка запроса пока недоступна. Необходимо подключить сервер.');
    };


    if (!open) return null;

    return (
        <div className="information-request">
            <div className="information-request__backdrop" onClick={handleClose} aria-hidden="true"/>
            
            <div ref={dialogRef} className="information-request__wrapper" role="dialog" aria-modal="true" aria-labelledby={titleId}>
                <button ref={closeButtonRef} type="button" className="information-request__close" onClick={handleClose} aria-label="Закрыть окно">
                    <span />
                    <span />
                </button>

                <div className="information-request-modal">
                    {
                        step === 1 && (
                            <form className="information-request__form" onSubmit={handlePersonalDataSubmit} noValidate>
                                <div className="information-request__heading">
                                    <h2 id={titleId}>Запросить информацию</h2>
                                    <p> Введите данные, чтобы система могла вас идентифицировать</p>
                                </div>

                                <div className="information-request-fields">
                                    <div className="information-request-row">
                                        <div className="information-request-field">
                                            <input type="text" name="fullName" placeholder="ФИО" autoComplete="name" aria-label="ФИО" aria-invalid={Boolean(errors.fullName)} value={formData.fullName} onChange={ (event) => updateField('fullName', event.target.value) }/>
                                            {
                                                errors.fullName && (
                                                    <span className="information-request-error">
                                                        {errors.fullName}
                                                    </span>
                                                )
                                            }
                                        </div>

                                        <div className="information-request-field">
                                            <input type="date" name="birthDate" aria-label="Дата рождения" aria-invalid={Boolean(errors.birthDate)} value={formData.birthDate} onChange={ (event) => updateField('birthDate', event.target.value) }/>
                                            {
                                                errors.birthDate && (
                                                    <span className="information-request-error">
                                                        {errors.birthDate}
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="information-request-row">
                                        <div className="information-request-field">
                                            <input type="tel" name="phone" placeholder="Номер телефона" autoComplete="tel" aria-label="Номер телефона" aria-invalid={Boolean(errors.phone)} value={formData.phone} onChange={(event) => updateField('phone', event.target.value) }/>
                                            {
                                                errors.phone && (
                                                    <span className="information-request-error">
                                                        {errors.phone}
                                                    </span>
                                                )
                                            }
                                        </div>

                                        <div className="information-request-field">
                                            <input type="email" name="email" placeholder="E-mail для отправки информации" autoComplete="email" aria-label="Электронная почта" aria-invalid={Boolean(errors.email)} value={formData.email} onChange={(event) => updateField('email', event.target.value) }/>
                                            {
                                                errors.email && (
                                                    <span className="information-request-error">
                                                        {errors.email}
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="information-request-gosuslugi">
                                    <span>подтвердите профиль через</span>

                                    <button type="button" className="information-request-gosuslugi-button" onClick={handleGosuslugiAuth}>
                                        <span className="information-request-gosuslugi-logo">Госуслуги</span>
                                    </button>
                                </div>

                                {
                                    authMessage && (
                                        <p className="information-request-auth-message" role="status">
                                            {authMessage}
                                        </p>
                                    )
                                }

                                <button type="submit" className="information-request__next">далее</button>
                            </form>
                        )
                    }

                    {
                        step === 2 && (
                            <form className="information-request-verification" onSubmit={handleCodeSubmit} noValidate>
                                <div className="information-request-verification-heading">
                                    <h2 id={titleId}>Запросить информацию</h2>
                                    <p>Введите код, пришедший на указанный номер телефона и адрес электронной почты</p>
                                </div>

                                <div className="information-request-verification-field">
                                    <input type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="Код 6 цифр" aria-label="Код подтверждения" aria-invalid={Boolean(codeError)} value={verificationCode} onChange={handleCodeChange}/>

                                    {
                                        codeError && (
                                            <span className="information-request-error" role="alert">
                                                {codeError}
                                            </span>
                                        )
                                    }
                                </div>

                                {
                                    demoNotice && DEMO_MODE && (
                                        <p className="information-request-demo-notice" role="status" >
                                            {demoNotice}
                                        </p>
                                    )
                                }

                                <button type="submit" className="information-request__next">далее</button>
                            </form>
                        )
                    }

                    {
                        step === 3 && (
                            <form className="information-request-request-form" onSubmit={handleRequestSubmit} noValidate>
                                <div className="information-request-request-heading">
                                    <h2 id={titleId}>Запросить информацию</h2>

                                    <div className="information-request__personal-data">
                                        <span>{formData.fullName}</span>
                                        <span>{formatBirthDate(formData.birthDate)}</span>
                                    </div>
                                </div>

                                <div className="information-request-request-field">
                                    <textarea value={requestMessage} onChange={(event) => { setRequestMessage(event.target.value); setRequestError(''); }} placeholder="Опишите ваш запрос. Укажите дополнительные данные, если они помогут в поиске" aria-label="Описание запроса" aria-invalid={Boolean(requestError)} rows={5}/>

                                    {
                                        requestError && (
                                            <span className="information-request-error" role="alert">
                                                {requestError}
                                            </span>
                                        )
                                    }
                                </div>

                                {
                                    demoNotice && DEMO_MODE && (
                                        <p className="information-request-demo-notice">
                                            {demoNotice}
                                        </p>
                                    )
                                }

                                <button type="submit" className="information-request__next information-request__submit">
                                    отправить запрос
                                </button>
                            </form>
                        )
                    }

                    {
                        step === 4 && (
                            <div className="information-request-success">
                                <div className="information-request-success-image">
                                    <span aria-hidden="true">✓</span>
                                </div>

                                <div className="information-request-success-content">
                                    <h2 id={titleId}>
                                        {DEMO_MODE ? 'Предпросмотр' : 'Успешно!'}
                                    </h2>

                                    {
                                        DEMO_MODE ? 
                                        (
                                            <p> Это демонстрация экрана успешной отправки. Ваш запрос не отправлен. <br /> Указанная электронная почта:{' '} <span>{formData.email}</span></p>
                                        ) : 
                                        (
                                            <p> Мы получили ваш запрос. <br /> Вышлем результаты поиска на указанную электронную почту{' '} <span>{formData.email}</span>{' '} в течение 3–5 рабочих дней.</p>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}