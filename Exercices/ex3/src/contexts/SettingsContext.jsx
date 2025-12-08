import { createContext, useState } from 'react';

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'fr',
  });

  const updateSettings = (partialSettings) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...partialSettings,
    }));
  };

  const value = {
    settings,
    updateSettings,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
