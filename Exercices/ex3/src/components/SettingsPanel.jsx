import { useSettings } from '../hooks/useSettings';
import './SettingsPanel.css';

export function SettingsPanel() {
  const { settings, updateSettings } = useSettings();

  const handleThemeChange = (e) => {
    updateSettings({ theme: e.target.value });
  };

  const handleLanguageChange = (e) => {
    updateSettings({ language: e.target.value });
  };

  return (
    <div className="settings-panel">
      <h2>Préférences</h2>
      <div className="setting-group">
        <label htmlFor="theme">Thème:</label>
        <select
          id="theme"
          value={settings.theme}
          onChange={handleThemeChange}
        >
          <option value="light">Clair</option>
          <option value="dark">Sombre</option>
        </select>
      </div>
      <div className="setting-group">
        <label htmlFor="language">Langue:</label>
        <select
          id="language"
          value={settings.language}
          onChange={handleLanguageChange}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}
