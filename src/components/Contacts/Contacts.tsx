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

const svg = (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

const mapUrl = 'https://yandex.ru/map-widget/v1/?ll=39.673288%2C47.259545&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzI5ODU5NBJF0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0JTQsNGH0L3QsNGPINGD0LvQuNGG0LAsIDEwIgoNbbEeQhXBCT1C&sctx=ZAAAAAgBEAAaKAoSCUZ4exAC3ENAEdqSVRFunEdAEhIJZMqHoGr01D8RbCIzF7g8yD8iBgABAgMEBSgKOABAi80GSAFqAnJ1nQHNzMw9oAEAqAEAvQGkHjxoggIBLooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=39.673288%2C47.259545&sspn=0.000954%2C0.000424&text=.&z=20.96';

export function Contacts({ title = 'Контакты', links = defaultLinks, address = '344064, Ростовская обл., Ростов-на-Дону, ул. Дачная, д. 10', }: ContactsProps) {
    return (
        <section className="contacts">
            <div className="container">
                <h1>
                    <span className='title title-thin'>{title}</span>
                </h1>

                <div className="contacts-grid">
                    <div className="contacts-list" aria-label="Ссылки на подразделения и контактную информацию">
                        <ul className="contacts-links">
                            {links.map((link, index) => (
                                <li key={`${link.title}-${index}`} className="contacts-item">
                                    <a className="base-link contacts-link" href={link.href}>
                                        <span>{link.title}</span>
                                        {svg}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <address className="contacts-address">{address}</address>
                    </div>

                    <div className="map-placeholder">
                        {
                            mapUrl ? (
                                <iframe src={mapUrl} title="Расположение госпиталя на карте" loading="eager" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                            ) : (
                                <span>КАРТА</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}