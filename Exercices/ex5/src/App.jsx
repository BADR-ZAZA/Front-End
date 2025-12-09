import { KanbanProvider } from './context/KanbanContext'
import { KanbanBoard } from './components/KanbanBoard'
import './App.css'

function App() {
  return (
    <KanbanProvider>
      <KanbanBoard />
    </KanbanProvider>
  )
}

export default App