import { useNotifications } from '../context/useNotifications';

const NOTIFICATION_MESSAGES = [
  'Bienvenue sur notre plateforme!',
  'Vous avez reçu un nouveau message',
  'Mise à jour disponible',
  'Votre compte a été modifié',
  'Notification importante',
  'Tâche complétée avec succès',
];

export function NotificationButton() {
  const { addNotification } = useNotifications();

  const handleAddNotification = () => {
    const randomMessage =
      NOTIFICATION_MESSAGES[
        Math.floor(Math.random() * NOTIFICATION_MESSAGES.length)
      ];
    addNotification(randomMessage);
  };

  return (
    <button onClick={handleAddNotification} className="btn btn-primary">
      Générer une notification
    </button>
  );
}
