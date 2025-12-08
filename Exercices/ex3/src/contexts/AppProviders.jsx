import { UserProvider } from './UserContext';
import { SettingsProvider } from './SettingsContext';

export function AppProviders({ children }) {
  return (
    <UserProvider>
      <SettingsProvider>
        {children}
      </SettingsProvider>
    </UserProvider>
  );
}
