import { useEffect, useState } from 'react';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Home } from './pages/Home/Home';
import type { NotificationState } from './types';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({ visible: false, message: '' });

  const showNotification = (message: string) => setNotification({ visible: true, message });

  useEffect(() => {
    if (!notification.visible) return;
    const timer = window.setTimeout(() => setNotification({ visible: false, message: '' }), 3500);
    return () => window.clearTimeout(timer);
  }, [notification.visible]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, searchOpen]);

  return (
    <MainLayout
      menuOpen={menuOpen}
      searchOpen={searchOpen}
      notification={notification}
      onMenuOpen={() => setMenuOpen(true)}
      onMenuClose={() => setMenuOpen(false)}
      onSearchOpen={() => setSearchOpen(true)}
      onSearchClose={() => setSearchOpen(false)}
      onCreateRequest={() => showNotification('Форма обращения будет доступна на странице обращений.')}
      onAccessibility={() => showNotification('Версия для слабовидящих будет подключена отдельно.')}
      onAppointment={() => showNotification('Форма записи будет доступна на странице записи.')}
    >
      <Home
        onAppointment={() => showNotification('Форма записи будет доступна на странице записи.')}
        onNotification={showNotification}
      />
    </MainLayout>
  );
}

export default App;
