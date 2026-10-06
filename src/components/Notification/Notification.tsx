import type { NotificationProps } from '../../types';
import './Notification.css';

export function Notification({ visible, message }: NotificationProps) {
  if (!visible) return null;
  return <div className="notification" role="status">{message}</div>;
}
