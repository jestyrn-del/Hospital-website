import type { ReactNode } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MobileMenu } from '../../components/MobileMenu/MobileMenu';
import { SearchOverlay } from '../../components/SearchOverlay/SearchOverlay';
import { Notification } from '../../components/Notification/Notification';
import type { NotificationState } from '../../types';

interface MainLayoutProps {
  children: ReactNode;
  menuOpen: boolean;
  searchOpen: boolean;
  notification: NotificationState;
  onMenuOpen: () => void;
  onMenuClose: () => void;
  onSearchOpen: () => void;
  onSearchClose: () => void;
  onCreateRequest: () => void;
  onAccessibility: () => void;
  onAppointment: () => void;
}

export function MainLayout({ children, menuOpen, searchOpen, notification, onMenuOpen, onMenuClose, onSearchOpen, onSearchClose, onCreateRequest, onAccessibility, onAppointment }: MainLayoutProps) {
  return (
    <>
      <Header onSearchOpen={onSearchOpen} onMenuOpen={onMenuOpen} onCreateRequest={onCreateRequest} onAccessibility={onAccessibility} />
      <main>{children}</main>
      <MobileMenu open={menuOpen} onClose={onMenuClose} onAppointment={onAppointment} onCreateRequest={onCreateRequest} />
      <SearchOverlay open={searchOpen} onClose={onSearchClose} />
      <Notification {...notification} onClose={() => {}} />
      <Footer/>
    </>
  );
}
