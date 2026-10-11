import { useEffect, useState } from 'react';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import type { NotificationState } from './types';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { PaidServices } from './pages/Payment/Payment';
import { AboutHospital } from './pages/AboutHospital/AboutHospital';
import { History } from './pages/History/History';
import { License } from './pages/License/License';
import { Patients } from './pages/Patients/Patients';
import { Structure } from './pages/Structure/Structure';
import { Vacation } from './pages/Vacation/Vacation';

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAppointment={() =>
                showNotification('Форма записи будет доступна на странице записи.')
              }
              onNotification={showNotification}
            />
          }
        />

        <Route
          path="/paid-services"
          element={<PaidServices onNotification={notification} />}
        />

        <Route
          path="/about"
          element={
            <AboutHospital
              OpenNews={() =>
                showNotification('Страница показа новостей пока не готова.')
              }
            />
          }
        />

        <Route path="/patients" element={<Patients />} />
        <Route path="/structure" element={<Structure />} />

        <Route path="/history" element={<History />} />
        <Route path="/license" element={<License />} />
        <Route path="/vacations" element={<Vacation />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
