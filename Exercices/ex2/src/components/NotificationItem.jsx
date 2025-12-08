import { useNotifications } from '../context/useNotifications';
import './NotificationItem.css';

export function NotificationItem({ notification }) {
  const { markAsRead, removeNotification } = useNotifications();

  return (
    <div className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
      <div className="notification-content">
        <span className="notification-message">{notification.message}</span>
        {!notification.read && <span className="notification-badge">Nouvelle</span>}
      </div>
      <div className="notification-actions">
        {!notification.read && (
          <button
            onClick={() => markAsRead(notification.id)}
            className="btn btn-small btn-mark-read"
            title="Marquer comme lu"
          >
            Marquer comme lu
          </button>
        )}
        <button
          onClick={() => removeNotification(notification.id)}
          className="btn btn-small btn-delete"
          title="Supprimer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
