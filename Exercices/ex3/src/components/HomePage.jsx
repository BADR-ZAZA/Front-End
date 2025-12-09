import { useUser } from '../hooks/useUser';
import './HomePage.css';

export function HomePage() {
  const { user, login } = useUser();

  const handleLogin = () => {
    login('Jean Dupont', 'user');
  };

  const handleLoginAdmin = () => {
    login('Admin', 'admin');
  };

  return (
    <div className="home-page">
      <div className="welcome-section">
        {user ? (
          <div className="logged-in">
            <h1>Bienvenue {user.name}!</h1>
            <p>Rôle: {user.role}</p>
          </div>
        ) : (
          <div className="logged-out">
            <h1>Veuillez vous connecter</h1>
            <div className="login-buttons">
              <button onClick={handleLogin} className="login-btn">
                Se connecter (User)
              </button>
              <button onClick={handleLoginAdmin} className="login-btn admin">
                Se connecter (Admin)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
