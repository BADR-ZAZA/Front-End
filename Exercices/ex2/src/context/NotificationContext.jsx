import { createContext, useReducer, useCallback } from 'react';

export const NotificationContext = createContext();

// Initial state
const initialState = {
  notifications: [],
};

// Reducer function
function notificationReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          {
            id: Date.now(),
            message: action.payload,
            read: false,
          },
          ...state.notifications,
        ],
      };

    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, read: true } : notif
        ),
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          (notif) => notif.id !== action.payload
        ),
      };

    case 'MARK_ALL_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map((notif) => ({
          ...notif,
          read: true,
        })),
      };

    default:
      return state;
  }
}

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const addNotification = useCallback((message) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: message });
  }, []);

  const markAsRead = useCallback((id) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
  }, []);

  const removeNotification = useCallback((id) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const markAllAsRead = useCallback(() => {
    dispatch({ type: 'MARK_ALL_AS_READ' });
  }, []);

  // Get unread count
  const unreadCount = state.notifications.filter((n) => !n.read).length;

  // Sort notifications: unread first, then by id (newest first)
  const sortedNotifications = [...state.notifications].sort((a, b) => {
    if (a.read === b.read) {
      return b.id - a.id; // Sort by id descending (newest first)
    }
    return a.read ? 1 : -1; // Unread first
  });

  const value = {
    notifications: sortedNotifications,
    unreadCount,
    addNotification,
    markAsRead,
    removeNotification,
    markAllAsRead,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
