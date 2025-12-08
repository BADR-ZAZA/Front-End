import { NotificationProvider } from './context/NotificationContext';
import { Navbar } from './components/Navbar';
import { NotificationButton } from './components/NotificationButton';
import { NotificationList } from './components/NotificationList';
import './App.css';

function AppContent() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <div className="app-header">
          <h1>Centre de Notifications Global</h1>
          <p>Gérez vos notifications avec React Context et useReducer</p>
        </div>
        <div className="app-content">
          <NotificationButton />
          <NotificationList />
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <NotificationProvider>
      <AppContent />
    </NotificationProvider>
  );
}

export default App;
