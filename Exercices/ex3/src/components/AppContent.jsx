import { useEffect } from 'react';
import { useSettings } from '../hooks/useSettings';
import { Navbar } from './Navbar';
import { HomePage } from './HomePage';
import { SettingsPanel } from './SettingsPanel';

export function AppContent() {
  const { settings } = useSettings();

  useEffect(() => {
    // Appliquer la classe de thème au body
    const root = document.documentElement;
    root.setAttribute('data-theme', settings.theme);

    // Appliquer les styles de thème
    if (settings.theme === 'dark') {
      root.style.backgroundColor = '#1e1e1e';
      root.style.color = '#ffffff';
    } else {
      root.style.backgroundColor = '#ffffff';
      root.style.color = '#333333';
    }
  }, [settings.theme]);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <SettingsPanel />
        <HomePage />
      </div>
    </>
  );
}
