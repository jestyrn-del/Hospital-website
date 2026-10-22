import { useCallback, useEffect, useState } from 'react';
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
import { Vacancy } from './pages/Vacancy/Vacancy';

const APPOINTMENT_MESSAGE = 'Форма записи будет доступна на странице записи.';
const ACCESSIBILITY_MESSAGE = 'Версия для слабовидящих будет подключена отдельно.';
const NEWS_MESSAGE = 'Страница показа новостей пока не готова.';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({ visible: false, message: '' });
  const [informationRequestOpen, setInformationRequestOpen] = useState(false);

  const showNotification = useCallback((message: string) => {
    setNotification({ visible: true, message });
  }, []);

  useEffect(() => {
    if (!notification.visible) return;
    const timer = window.setTimeout(() => setNotification({ visible: false, message: '' }), 3500);
    return () => window.clearTimeout(timer);
  }, [notification.visible]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, searchOpen]);

  const openInformationRequest = useCallback(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setInformationRequestOpen(true);
  }, []);

  const closeInformationRequest = useCallback(() => {
    setInformationRequestOpen(false);
  }, []);

  const handleAppointment = useCallback(() => {
    showNotification(APPOINTMENT_MESSAGE);
  }, [showNotification]);

  const handleAccessibility = useCallback(() => {
    showNotification(ACCESSIBILITY_MESSAGE);
  }, [showNotification]);

  return (
    <MainLayout
      menuOpen={menuOpen}
      searchOpen={searchOpen}
      notification={notification}
      informationRequestOpen={informationRequestOpen}
      informationRequestClose={closeInformationRequest}
      onMenuOpen={() => setMenuOpen(true)}
      onMenuClose={() => setMenuOpen(false)}
      onSearchOpen={() => setSearchOpen(true)}
      onSearchClose={() => setSearchOpen(false)}
      onCreateRequest={openInformationRequest}
      onAccessibility={handleAccessibility}
      onAppointment={handleAppointment}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAppointment={handleAppointment}
              onNotification={showNotification}
              onCreateRequest={openInformationRequest}
            />
          }
        />

        <Route path="/paid-services" element={<PaidServices />} />

        <Route
          path="/about"
          element={<AboutHospital OpenNews={() => showNotification(NEWS_MESSAGE)} />}
        />

        <Route path="/patients" element={<Patients />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/history" element={<History />} />
        <Route path="/license" element={<License />} />
        <Route path="/vacancy" element={<Vacancy />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
