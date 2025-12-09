import './App.css'
import { FavoriteProvider } from './context/FavoriteContext'
import ArticleList from './components/ArticleList'
import FavoritePanel from './components/FavoritePanel'

function App() {
  return (
    <FavoriteProvider>
      <div id="app-root">
        <h1>Mini bibliothèque</h1>
        <div className="layout">
          <aside className="panel">
            <FavoritePanel />
          </aside>
          <main className="content">
            <ArticleList />
          </main>
        </div>
      </div>
    </FavoriteProvider>
  )
}

export default App
