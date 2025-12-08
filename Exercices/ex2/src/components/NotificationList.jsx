import { useNotifications } from '../context/useNotifications';
import { NotificationItem } from './NotificationItem';
import './NotificationList.css';

export function NotificationList() {
  const { notifications, markAllAsRead } = useNotifications();

  return (
    <div className="notification-list-container">
      <div className="notification-list-header">
        <h2>Centre de notifications</h2>
        {notifications.length > 0 && (
          <button
            onClick={markAllAsRead}
            className="btn btn-small btn-mark-all"
          >
            Tout marquer comme lu
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="notification-empty">
          <p>Aucune notification</p>
        </div>
      ) : (
        <div className="notification-list">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      )}
    </div>
  );
}
