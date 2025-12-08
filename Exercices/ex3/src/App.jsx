import './App.css'
import { AppProviders } from './contexts/AppProviders'
import { AppContent } from './components/AppContent'

function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  )
}

export default App
