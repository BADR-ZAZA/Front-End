import { useNotifications } from '../context/useNotifications';
import './Navbar.css';

export function Navbar() {
  const { unreadCount } = useNotifications();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">App Notifications</h1>
        <div className="navbar-notifications">
          <span className="notifications-label">
            Notifications
            {unreadCount > 0 && (
              <span className="notification-badge-navbar">{unreadCount}</span>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}
