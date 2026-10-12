import './Contacts.css';

interface ContactLink {
    title: string;
    href: string;
}

interface ContactsProps {
    title?: string;
    links?: ContactLink[];
    address?: string;
}

const defaultLinks: ContactLink[] = [
    { title: '1602 ВКГ', href: '#', },
    { title: 'Страховые медицинские организации', href: '#', },
    { title: 'Военная академия', href: '#', },
    { title: 'Психологическая поддержка ВС РФ', href: '#', },
];

const mapUrl = 'https://yandex.ru/map-widget/v1/?ll=39.674003%2C47.259483&mode=search&sctx=ZAAAAAgBEAAaKAoSCUZ4exAC3ENAEdqSVRFunEdAEhIJZMqHoGr01D8RbCIzF7g8yD8iBgABAgMEBSgKOABAi80GSAFqAnJ1nQHNzMw9oAEAqAEAvQGkHjxoggIBLooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=39.674003%2C47.259483&sspn=0.004699%2C0.002089&text=.&whatshere%5Bpoint%5D=39.673947%2C47.258650&whatshere%5Bzoom%5D=17&z=18.66';

export function Contacts({ title = 'Контакты', links = defaultLinks, address = '344064, Ростовская обл., Ростов-на-Дону, ул. Дачная, д. 10', }: ContactsProps) {
    return (
        <section className="contacts section" id="contacts">
            <div className="container">

                <div className="section-heading">
                    <h2>{title}</h2>
                </div>

                <div className="contacts-grid">

                    <div className="contacts-list">
                        {links.map((link, index) => (
                            <a
                                key={`${link.title}-${index}`}
                                className="base-link contacts-link"
                                href={link.href}
                            >
                                <span>{link.title}</span>

                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M4 16L16 4M6 4H16V14"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        ))}

                        <span className="contacts-address">
                            {address}
                        </span>
                    </div>

                    <div className="map-placeholder">
                        {mapUrl ? (
                            <iframe
                                src={mapUrl}
                                title="Расположение госпиталя на карте"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        ) : (
                            <span>КАРТА</span>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}