export interface HeaderProps {
  onSearchOpen: () => void;
  onMenuOpen: () => void;
  onCreateRequest: () => void;
  onAccessibility: () => void;
}

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onAppointment: () => void;
  onCreateRequest: () => void;
}

export interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export interface NotificationState {
  visible: boolean;
  message: string;
}

export interface NotificationProps extends NotificationState {
  onClose: () => void;
}

export interface ReviewFormData {
  name: string;
  email: string;
  message: string;
}

export interface HomeProps {
  onAppointment: () => void;
  onNotification: (message: string) => void;
}
