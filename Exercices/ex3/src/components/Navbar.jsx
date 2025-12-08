import { useUser } from '../hooks/useUser';
import { useSettings } from '../hooks/useSettings';
import './Navbar.css';

export function Navbar() {
  const { user, logout } = useUser();
  const { settings } = useSettings();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Mon App</h1>
      </div>
      <div className="navbar-center">
        <p className="user-info">
          {user ? `Bienvenue ${user.name}` : 'Invité'}
        </p>
      </div>
      <div className="navbar-right">
        <span className="settings-info">
          Thème: {settings.theme} | Langue: {settings.language}
        </span>
        {user && (
          <button onClick={logout} className="logout-btn">
            Se déconnecter
          </button>
        )}
      </div>
    </nav>
  );
}
